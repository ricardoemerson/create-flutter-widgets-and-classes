import clazz from './templates/clazz';
import clazzControllerChangeNotifier from './templates/clazzControllerChangeNotifier';
import clazzEnum from './templates/clazzEnum';
import clazzException from './templates/clazzException';
import clazzExtension from './templates/clazzExtension';
import clazzImplementation from './templates/clazzImplementation';
import clazzMixin from './templates/clazzMixin';
import flutterMain from './templates/flutterMain';
import getxAppBindings from './templates/getxAppBindings';
import getxAppPages from './templates/getxAppPages';
import getxFeatureBinding from './templates/getxFeatureBinding';
import getxFeatureController from './templates/getxFeatureController';
import getxFeatureRoutesConstantRoute from './templates/getxFeatureRoutesConstantRoute';
import getxFeatureRoutesGetPage from './templates/getxFeatureRoutesGetPage';
import getxFeatureRoutesImports from './templates/getxFeatureRoutesImports';
import getxFeatureView from './templates/getxFeatureView';
import getxMainRoutes from './templates/getxMainRoutes';
import getxService from './templates/getxService';
import interfaceClazz from './templates/interfaceClazz';
import mobxStore from './templates/mobxStore';
import pascalCase from './templates/shared/functions/pascal-case';
import { sleep } from './templates/shared/functions/sleep';
import singletonClazz from './templates/singletonClazz';
import statefulWidget from './templates/statefulWidget';
import statefulWidgetPage from './templates/statefulWidgetPage';
import statelessWidget from './templates/statelessWidget';
import statelessWidgetPage from './templates/statelessWidgetPage';

import { FeatureType } from './extension';

import * as fs from 'fs';
import { lowerCase, snakeCase, upperFirst } from 'lodash';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import * as vscode from 'vscode';

interface ComponentProps {
  dir?: string;
  type: FeatureType;
  stateFulWidget?: boolean;
}

interface GetxFeature {
  dir: string;
  fileName: string;
  componentName: string;
  getxViewsSuffix: string;
  getxUseConstructorTearOffs: boolean;
}

interface UpdateAppRoutes {
  fullRoutesPath: string;
  sep: string;
  importFile: string;
  routeInfo: string;
}

interface UpdateFeatureRoutes {
  fullRoutesPath: string;
  mainRouteName: string;
  sep: string;
  importFiles: string;
  constantRouteData: string;
  getPageData: string;
}

export default async (
  componentName: string,
  { dir, type, stateFulWidget = false }: ComponentProps
) => {
  // Load configurations.
  const config = vscode.workspace.getConfiguration('flutterTools');
  const getxViewsSuffix = config.get('getxViewsSuffix') as string;
  const widgetsViewsSuffix = config.get('widgetsViewsSuffix') as string;
  const getxProjectPath = config.get('getxProjectPath') as string;
  const getxUseConstructorTearOffs = config.get('getxUseConstructorTearOffs') as boolean;
  const useIPrefixForInterfaces = config.get('useIPrefixForInterfaces') as boolean;
  const createImplementationOfInterface = config.get(
    'createImplementationOfInterface'
  ) as boolean;
  const createFolderForInterfaces = config.get('createFolderForInterfaces') as boolean;
  const createFolderForWidgetsPage = config.get('createFolderForWidgetsPage') as boolean;
  const useSuperInitializerParameters = config.get('useSuperInitializerParameters') as boolean;

  const projectRoot = (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;

  componentName = componentName.trim();

  const fileName = snakeCase(componentName);
  const iPrefix = useIPrefixForInterfaces ? 'i_' : '';
  const implSuffix = useIPrefixForInterfaces ? '' : '_impl';

  let componentFileName: string;
  let componentFileNameForImplementation: string;
  const interfaceTypes = ['provider', 'repository', 'service', 'interface-folder'];
  const mobxFileSuffix = type === 'mobx-controller' ? 'Controller' : 'Store';

  if (type === 'interface' || type === 'interface-folder') {
    componentFileName = `${iPrefix}${fileName}.dart`;
    componentFileNameForImplementation = `${fileName}${implSuffix}.dart`;
  } else if (interfaceTypes.includes(type)) {
    componentName += upperFirst(type);
    componentFileName = `${iPrefix}${fileName}_${type}.dart`;
    componentFileNameForImplementation = `${fileName}_${type}${implSuffix}.dart`;
  } else if (type === 'controller' || type === 'controller-change-notifier') {
    componentName += 'Controller';
    componentFileName = `${fileName}_controller.dart`;
  } else if (type === 'dto') {
    componentName += 'DTO';
    componentFileName = `${fileName}_dto.dart`;
  } else if (type === 'helper') {
    componentName += 'Helper';
    componentFileName = `${fileName}_helper.dart`;
  } else if (type === 'enum') {
    componentName += 'Enum';
    componentFileName = `${fileName}_enum.dart`;
  } else if (type === 'extension') {
    componentName += 'Extension';
    componentFileName = `${fileName}_extension.dart`;
  } else if (type === 'mixin') {
    componentName += 'Mixin';
    componentFileName = `${fileName}_mixin.dart`;
  } else if (type === 'exception') {
    componentFileName = `${fileName}_exception.dart`;
  } else if (type === 'model') {
    componentName += 'Model';
    componentFileName = `${fileName}_model.dart`;
  } else if (type === 'mobx-controller' || type === 'mobx-store') {
    componentFileName = `${fileName}_${lowerCase(mobxFileSuffix)}.dart`;
  } else if (type === 'widget-page') {
    componentFileName = `${fileName}_${lowerCase(widgetsViewsSuffix)}.dart`;
  } else {
    componentFileName = `${fileName}.dart`;
  }

  const sep = path.sep;

  if (!dir) {
    dir =
      (await vscode.window.showInputBox({
        value: sep,
        prompt: `Path from root`,
        ignoreFocusOut: true,
        valueSelection: [-1, -1],
      })) || '';
  }

  if (!dir.includes(projectRoot)) {
    dir = projectRoot + dir;
  }

  if (dir[dir.length - 1] !== sep) {
    dir = dir + sep;
  }

  const filePath = (fileName: string) => {
    return dir + sep + fileName;
  };

  const filePathFeature = (folderName: string, fileName: string) => {
    // return dir + sep + folderName + sep + fileName;
    return folderName + sep + fileName;
  };

  const createGetxFeature = async ({
    dir,
    fileName,
    componentName,
    getxViewsSuffix,
  }: GetxFeature) => {
    const pathDir = `${dir}${fileName}`;

    const routesPath = getxProjectPath.split('/').join(sep) + '/routes';
    const fullRoutesPath = `${projectRoot}${routesPath}`;
    const featurePath = pathDir.split('modules')[1].split(sep).join('/');

    const featureModules = featurePath.split('/');
    featureModules.shift();
    const mainRouteName = `${featureModules[0]}`;
    const mainRoutePath = `${fullRoutesPath}${sep}${mainRouteName}_routes.dart`;

    const routeFileExists = fs.existsSync(mainRoutePath);
    const createRouteFile = !routeFileExists;

    if (!fs.existsSync(fullRoutesPath)) {
      await mkdirp(fullRoutesPath);
    }

    await mkdirp(pathDir);

    await createFile(
      filePathFeature(pathDir, `${fileName}_binding.dart`),
      getxFeatureBinding({ componentName, fileName, getxUseConstructorTearOffs })
    );

    await createFile(
      filePathFeature(pathDir, `${fileName}_controller.dart`),
      getxFeatureController({ componentName, fileName })
    );

    await createFile(
      filePathFeature(pathDir, `${fileName}_${lowerCase(getxViewsSuffix)}.dart`),
      getxFeatureView({ componentName, fileName, getxViewsSuffix, useSuperInitializerParameters })
    );

    if (createRouteFile) {
      await createFile(
        filePathFeature(fullRoutesPath, `${mainRouteName}_routes.dart`),
        getxMainRoutes({
          componentName,
          mainRouteName,
          getxViewsSuffix,
          featurePath,
          getxUseConstructorTearOffs,
        })
      );

      if (type !== 'getx-structure') {
        const importFile = `import '${mainRouteName}_routes.dart';`;
        const routeInfo = `...${pascalCase(mainRouteName)}Routes.routes,`;

        updateAppPages({
          fullRoutesPath,
          sep,
          importFile,
          routeInfo,
        });
      }
    } else {
      const importFiles = getxFeatureRoutesImports({
        componentName,
        getxViewsSuffix,
        featurePath,
      });
      const constantRouteData = getxFeatureRoutesConstantRoute({
        componentName,
        getxViewsSuffix,
        featurePath,
        getxUseConstructorTearOffs,
      });
      const getPageData = getxFeatureRoutesGetPage({
        componentName,
        getxViewsSuffix,
        featurePath,
        getxUseConstructorTearOffs,
      });

      updateFeatureRoutes({
        fullRoutesPath,
        mainRouteName,
        sep,
        importFiles,
        constantRouteData,
        getPageData,
      });
    }
  };

  async function updateAppPages({
    fullRoutesPath,
    sep,
    importFile,
    routeInfo,
  }: UpdateAppRoutes) {
    const appRoutesPath = `${fullRoutesPath}${sep}app_pages.dart`;

    if (!fs.existsSync(appRoutesPath)) {
      await createFile(
        filePathFeature(fullRoutesPath, 'app_pages.dart'),
        getxAppPages({ componentName: 'app_pages' })
      );

      await sleep(500);
    }

    const appRoutesContent = fs.readFileSync(appRoutesPath).toString('utf-8');
    const appRoutesContentLines = appRoutesContent.split('\n');

    let lastImportIndex = 0;
    let lastRouteIndex = 0;

    appRoutesContentLines.forEach((line, index) => {
      if (line.startsWith('import')) {
        lastImportIndex = index + 1;
      }

      if (line.endsWith('];')) {
        lastRouteIndex = index + 1;
      }
    });

    appRoutesContentLines.splice(lastImportIndex, 0, importFile);
    appRoutesContentLines.splice(lastRouteIndex, 0, `\t\t${routeInfo}`);

    const updatedRoutesContent = appRoutesContentLines.join('\n');

    await fs.writeFile(appRoutesPath, updatedRoutesContent, err => {
      if (err) {
        vscode.window.showErrorMessage(
          `Not was possible update the app routes in ${appRoutesPath}.`
        );
      }
    });
  }

  async function updateFeatureRoutes({
    fullRoutesPath,
    mainRouteName,
    sep,
    importFiles,
    constantRouteData,
    getPageData,
  }: UpdateFeatureRoutes) {
    const featureRoutesPath = `${fullRoutesPath}${sep}${mainRouteName}_routes.dart`;

    await sleep(500);

    const appRoutesContent = fs.readFileSync(featureRoutesPath).toString('utf-8');
    const appRoutesContentLines = appRoutesContent.split('\n');

    let lastImportIndex = 0;
    let lastConstantRouteIndex = 0;
    let lastConstantRouteMixedIndex = 0;
    let lastGetPageIndex = 0;

    appRoutesContentLines.forEach((line, index) => {
      if (line.startsWith('import')) {
        lastImportIndex = index + 1;
      }

      if (line.trimLeft().startsWith('static const')) {
        lastConstantRouteIndex = index + 1;
      }

      if (line.endsWith('Routes._();')) {
        lastConstantRouteMixedIndex = index + 1;
      }

      if (line.endsWith('];')) {
        lastGetPageIndex = index + 1;
      }
    });

    appRoutesContentLines.splice(lastImportIndex, 0, importFiles);

    if (lastConstantRouteIndex !== 0) {
      appRoutesContentLines.splice(
        lastConstantRouteIndex + 1,
        0,
        `\t${constantRouteData}`
      );
    } else {
      appRoutesContentLines.splice(
        lastConstantRouteMixedIndex + 1,
        0,
        `\n\t${constantRouteData}`
      );
    }

    appRoutesContentLines.splice(lastGetPageIndex + 1, 0, `\t\t${getPageData}`);

    const updatedRoutesContent = appRoutesContentLines.join('\n');

    await fs.writeFile(featureRoutesPath, updatedRoutesContent, err => {
      if (err) {
        vscode.window.showErrorMessage(
          `Not was possible update the app routes in ${featureRoutesPath}.`
        );
      }
    });
  }

  if (type === 'widget' && !stateFulWidget) {
    await createFile(filePath(componentFileName), statelessWidget({ componentName, useSuperInitializerParameters }));
  }

  if (type === 'widget' && stateFulWidget) {
    await createFile(filePath(componentFileName), statefulWidget({ componentName, useSuperInitializerParameters }));
  }

  if (type === 'widget-page' && !stateFulWidget) {
    if (createFolderForWidgetsPage) {
      const pathDir = `${dir}${sep}${fileName}`;

      await mkdirp(pathDir);

      await createFile(
        filePathFeature(pathDir, componentFileName),
        statelessWidgetPage({ componentName, widgetsViewsSuffix, useSuperInitializerParameters })
      );
    } else {
      await createFile(
        filePath(componentFileName),
        statelessWidgetPage({ componentName, widgetsViewsSuffix, useSuperInitializerParameters })
      );
    }
  }

  if (type === 'widget-page' && stateFulWidget) {
    if (createFolderForWidgetsPage) {
      const pathDir = `${dir}${sep}${fileName}`;

      await mkdirp(pathDir);

      await createFile(
        filePathFeature(pathDir, componentFileName),
        statefulWidgetPage({ componentName, widgetsViewsSuffix, useSuperInitializerParameters })
      );
    } else {
      await createFile(
        filePath(componentFileName),
        statefulWidgetPage({ componentName, widgetsViewsSuffix, useSuperInitializerParameters })
      );
    }
  }

  if (
    type === 'class' ||
    type === 'controller' ||
    type === 'dto' ||
    type === 'helper' ||
    type === 'model'
  ) {
    await createFile(filePath(componentFileName), clazz({ componentName }));
  }

  if (type === 'singleton-class') {
    await createFile(filePath(componentFileName), singletonClazz({ componentName }));
  }

  if (type === 'controller-change-notifier') {
    await createFile(
      filePath(componentFileName),
      clazzControllerChangeNotifier({ componentName })
    );
  }

  if (type === 'enum') {
    await createFile(filePath(componentFileName), clazzEnum({ componentName }));
  }

  if (type === 'exception') {
    await createFile(filePath(componentFileName), clazzException({ componentName }));
  }

  if (type === 'extension') {
    await createFile(filePath(componentFileName), clazzExtension({ componentName }));
  }

  if (type === 'mixin') {
    await createFile(filePath(componentFileName), clazzMixin({ componentName }));
  }

  if (type === 'getx-service') {
    await createFile(filePath(componentFileName), getxService({ componentName }));
  }

  if (
    type === 'interface' ||
    type === 'interface-folder' ||
    interfaceTypes.includes(type)
  ) {
    if (
      (createFolderForInterfaces && interfaceTypes.includes(type)) ||
      (createFolderForInterfaces && type === 'interface-folder')
    ) {
      const pathDir = `${dir}${sep}${fileName}`;

      await mkdirp(pathDir);

      await createFile(
        filePathFeature(pathDir, componentFileName),
        interfaceClazz({ componentName, useIPrefixForInterfaces })
      );

      if (createImplementationOfInterface) {
        setTimeout(async () => {
          await createFile(
            filePathFeature(pathDir, componentFileNameForImplementation),
            clazzImplementation({ componentName, useIPrefixForInterfaces })
          );
        }, 1000);
      }
    } else {
      await createFile(
        filePath(componentFileName),
        interfaceClazz({ componentName, useIPrefixForInterfaces })
      );

      if (createImplementationOfInterface) {
        setTimeout(async () => {
          await createFile(
            filePath(componentFileNameForImplementation),
            clazzImplementation({ componentName, useIPrefixForInterfaces })
          );
        }, 1000);
      }
    }
  }

  if (type === 'getx-feature') {
    await createGetxFeature({
      dir,
      fileName,
      componentName,
      getxViewsSuffix,
      getxUseConstructorTearOffs,
    });
  }

  if (type === 'getx-structure') {
    const mainFile = dir + sep + 'main.dart';
    const oldMainFile = dir + sep + 'remove_old_main.dart';

    fs.rename(mainFile, oldMainFile, () => null);

    const usesAppPath = getxProjectPath.includes('app') ? true : false;
    const getxFolder = usesAppPath ? '/app/' : '/';

    if (usesAppPath) {
      if (fs.existsSync(dir + `/app`)) {
        vscode.window.showErrorMessage(
          'GetX App Structure can only be created if "/app" folder does not exist!'
        );

        return;
      }

      await mkdirp(dir + `/app`);
    }

    if (
      fs.existsSync(dir + `${getxFolder}core`) ||
      fs.existsSync(dir + `${getxFolder}data`) ||
      fs.existsSync(dir + `${getxFolder}modules`) ||
      fs.existsSync(dir + `${getxFolder}routes`)
    ) {
      vscode.window.showErrorMessage(
        'GetX App Structure only can be created if "/core", "/data", "/modules" and "/routes" folders does not exists!'
      );

      return;
    }

    await mkdirp(dir + `${getxFolder}core`);

    await mkdirp(dir + `${getxFolder}core/bindings`);

    const bindingsPath = usesAppPath
      ? 'app/core/bindings/application_bindings.dart'
      : 'core/bindings/application_bindings.dart';

    await createFile(
      filePath(bindingsPath),
      getxAppBindings({ componentName: 'application_bindings' })
    );

    await mkdirp(dir + `${getxFolder}core/config`);
    await mkdirp(dir + `${getxFolder}core/helpers`);
    await mkdirp(dir + `${getxFolder}core/mixins`);
    await mkdirp(dir + `${getxFolder}core/theme`);
    await mkdirp(dir + `${getxFolder}core/widgets`);
    await mkdirp(dir + `${getxFolder}data`);
    await mkdirp(dir + `${getxFolder}data/dtos`);
    await mkdirp(dir + `${getxFolder}data/enums`);
    await mkdirp(dir + `${getxFolder}data/exceptions`);
    await mkdirp(dir + `${getxFolder}data/extensions`);
    await mkdirp(dir + `${getxFolder}data/models`);
    await mkdirp(dir + `${getxFolder}data/providers`);
    await mkdirp(dir + `${getxFolder}data/repositories`);
    await mkdirp(dir + `${getxFolder}data/services`);
    await mkdirp(dir + `${getxFolder}data/sessions`);

    await mkdirp(dir + `${getxFolder}modules`);

    const modulesFolder = usesAppPath
      ? `${dir}app${sep}modules${sep}`
      : `${dir}modules${sep}`;

    await createGetxFeature({
      dir: modulesFolder,
      fileName: 'home',
      componentName: 'home',
      getxViewsSuffix,
      getxUseConstructorTearOffs,
    });

    const routesPath = getxProjectPath.split('/').join(sep) + '/routes';
    const fullRoutesPath = `${projectRoot}${routesPath}`;

    await createFile(
      filePathFeature(fullRoutesPath, 'app_pages.dart'),
      getxAppPages({ componentName: 'app_pages' })
    );

    await createFile(filePath('main.dart'), flutterMain({ componentName, usesAppPath }));
  }

  if (type === 'mobx-controller' || type === 'mobx-store') {
    await createFile(
      filePath(componentFileName),
      mobxStore({ componentName, fileName, mobxFileSuffix })
    );
  }

  setTimeout(() => {
    if (type === 'widget-page' && createFolderForWidgetsPage) {
      vscode.workspace
        .openTextDocument(
          filePath(`${fileName}/${fileName}_${lowerCase(widgetsViewsSuffix)}.dart`)
        )
        .then(editor => {
          if (!editor) {
            return;
          }
          vscode.window.showTextDocument(editor);
        });
    } else if (type === 'getx-feature') {
      vscode.workspace
        .openTextDocument(
          filePath(`${fileName}/${fileName}_${lowerCase(getxViewsSuffix)}.dart`)
        )
        .then(editor => {
          if (!editor) {
            return;
          }
          vscode.window.showTextDocument(editor);
        });
    } else if (type === 'getx-structure') {
      const usesAppPath = getxProjectPath.includes('app') ? true : false;
      const homePath = usesAppPath
        ? `app/modules/home/home_${lowerCase(getxViewsSuffix)}.dart`
        : `modules/home/home_${lowerCase(getxViewsSuffix)}.dart`;
      vscode.workspace.openTextDocument(filePath(homePath)).then(editor => {
        if (!editor) {
          return;
        }
        vscode.window.showTextDocument(editor);
      });
    } else if (interfaceTypes.includes(type) && createFolderForInterfaces) {
      vscode.workspace
        .openTextDocument(filePath(`${fileName}/${componentFileName}`))
        .then(editor => {
          if (!editor) {
            return;
          }
          vscode.window.showTextDocument(editor);
        });
    } else {
      vscode.workspace.openTextDocument(filePath(componentFileName)).then(editor => {
        if (!editor) {
          return;
        }
        vscode.window.showTextDocument(editor);
      });
    }
  }, 50);
};

const createDir = (targetDir: string) => {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  const baseDir = __dirname;

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === 'EEXIST') {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
      if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
};

const createFile = async (filePath: string, content: string | string[]) => {
  if (!fs.existsSync(filePath)) {
    await fs.createWriteStream(filePath).close();
    await sleep(200);
    await fs.writeFile(filePath, content, err => {
      if (err) {
        vscode.window.showErrorMessage('Maker cant write to file.');
      }
    });
  } else {
    vscode.window.showWarningMessage('File already exists.');
  }
};
