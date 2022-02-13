import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as vscode from 'vscode';


import statelessWidget from './templates/statelessWidget';
import statefulWidget from './templates/statefulWidget';
import clazz from './templates/clazz';
import interfaceClazz from './templates/interfaceClazz';
import mobxStore from './templates/mobxStore';
import { camelCase, kebabCase, lowerCase, snakeCase, upperFirst } from 'lodash';
import pascalCase from './templates/shared/functions/pascal-case';
import clazzImplementation from './templates/clazzImplementation';
import getxFeatureBinding from './templates/getxFeatureBinding';
import getxFeatureController from './templates/getxFeatureController';
import getxFeatureView from './templates/getxFeatureView';
import getxFeatureRoutes from './templates/getxFeatureRoutes';
import getxAppBindings from './templates/getxAppBindings';
import getxAppPages from './templates/getxAppPages';
import getxService from './templates/getxService';
import flutterMain from './templates/flutterMain';

interface ComponentProps {
  dir?: string;
  type: 'widget' | 'class' | 'dto'  | 'model' | 'controller' | 'interface' | 'provider' | 'repository' | 'service' | 'getx-feature' | 'getx-route' |'getx-service' | 'getx-structure' | 'mobx-store';
  stateFullWidget?: boolean;
}

interface GetxFeature {
  dir: string;
  fileName: string;
  componentName: string;
  getxViewsSuffix: string;
  fromRoot?: boolean;
}

export default async (componentName: string, { dir, type, stateFullWidget = false }: ComponentProps) => {
  // Load configurations.
  const config = vscode.workspace.getConfiguration("createFlutterWidgetsAndClasses");
  const getxViewsSuffix = config.get("getxViewsSuffix") as string;
  const useIPrefixForInterfaces = config.get("useIPrefixForInterfaces") as boolean;
  const createImplementationOfInterface = config.get("createImplementationOfInterface") as boolean;

  const projectRoot = (vscode.workspace.workspaceFolders as any)[0].uri.fsPath;

  componentName = componentName.trim();

  let fileName= snakeCase(componentName);
  let iPrefix = useIPrefixForInterfaces ? 'i_' : '';
  let implSufix = useIPrefixForInterfaces ? '' : '_impl';

  let componentFileName: string;
  let componentFileNameForImplementation: string;
  const interfaceTypes = ['provider', 'repository', 'service']

  if (type === 'interface') {
    componentFileName = `${ iPrefix }${ fileName }.dart`;
    componentFileNameForImplementation = `${ fileName }${ implSufix }.dart`
  } else if (interfaceTypes.includes(type)) {
    componentName += upperFirst(type);
    componentFileName = `${ iPrefix }${ fileName }_${ type }.dart`;
    componentFileNameForImplementation = `${ fileName }_${ type }${ implSufix }.dart`
  } else if (type === 'controller') {
    componentName += 'Controller';
    componentFileName = `${ fileName }_controller.dart`;
  } else if (type === 'dto') {
    componentName += 'DTO';
    componentFileName = `${ fileName }_dto.dart`;
  } else if (type === 'model') {
    componentName += 'Model';
    componentFileName = `${ fileName }_model.dart`;
  } else if (type === 'getx-route') {
    componentFileName = `${ fileName }_routes.dart`;
  } else {
    componentFileName = `${ fileName }.dart`;
  }

  const sep = path.sep;

  if (!dir) {
    dir =
      (await vscode.window.showInputBox({
        value: sep,
        prompt: `Path from root`,
        ignoreFocusOut: true,
        valueSelection: [-1, -1]
      })) || "";
  }

  if (!dir.includes(projectRoot)) {
    dir = projectRoot + dir;
  }

  if (dir[dir.length - 1] !== sep) {
    dir = dir + sep;
  }

  const filePath = (fileName: string) => {
    return dir + sep + fileName;
  }

  const filePathFeature = (folderName: string, fileName: string) => {
    // return dir + sep + folderName + sep + fileName;
    return folderName + sep + fileName;
  }

  const createGetxFeature = async ({
    dir, fileName, componentName, getxViewsSuffix, fromRoot = false,
  }: GetxFeature) => {
    let pathDir: string = `${dir}${sep}${fileName}`;

    await mkdirp(pathDir);

    await createFile(
      filePathFeature(pathDir, `${ fileName }_binding.dart`), getxFeatureBinding({ componentName, fileName })
    );

    await createFile(
      filePathFeature(pathDir, `${ fileName }_controller.dart`), getxFeatureController({ componentName, fileName })
    );

    await createFile(
      filePathFeature(pathDir, `${ fileName }_${lowerCase(getxViewsSuffix)}.dart`), getxFeatureView({ componentName, fileName, getxViewsSuffix })
    );
  };

  if (type === 'widget' && !stateFullWidget) {
    await createFile(
      filePath(componentFileName), statelessWidget({ componentName })
    );
  }

  if (type === 'widget' && stateFullWidget) {
    await createFile(
      filePath(componentFileName), statefulWidget({ componentName })
    );
  }

  if (type === 'class' || type === 'controller' || type === 'model' || type === 'dto') {
    await createFile(
      filePath(componentFileName), clazz({ componentName })
    );
  }

  if (type === 'getx-route') {
    await createFile(
      filePath(componentFileName), getxFeatureRoutes({ componentName, getxViewsSuffix })
    );
  }

  if (type === 'getx-service') {
    await createFile(
      filePath(componentFileName), getxService({ componentName })
    );
  }

  if (type === 'interface' || interfaceTypes.includes(type)) {
    await createFile(
      filePath(componentFileName), interfaceClazz({ componentName, useIPrefixForInterfaces })
    );

    if (createImplementationOfInterface) {
      setTimeout(async () => {
        await createFile(
          filePath(componentFileNameForImplementation), clazzImplementation({ componentName, useIPrefixForInterfaces })
        );
      }, 1000);
    }
  }

  if (type === 'getx-feature') {
    await createGetxFeature({ dir, fileName, componentName, getxViewsSuffix });
  }

  if (type === 'getx-structure') {
    const mainFile = dir + sep + 'main.dart';
    const oldMainFile = dir + sep + 'remove_old_main.dart';

    fs.rename(mainFile, oldMainFile, () => null);

    await mkdirp(dir + '/app');
    await mkdirp(dir + '/app/core');

    await mkdirp(dir + '/app/core/bindings');
    await createFile(
      filePath(`app/core/bindings/application_bindings.dart`), getxAppBindings({ componentName: 'application_bindings' })
    );

    await mkdirp(dir + '/app/core/config');
    await mkdirp(dir + '/app/core/theme');
    await mkdirp(dir + '/app/core/widgets');
    await mkdirp(dir + '/app/data');
    await mkdirp(dir + '/app/data/dtos');
    await mkdirp(dir + '/app/data/enums');
    await mkdirp(dir + '/app/data/exceptions');
    await mkdirp(dir + '/app/data/extensions');
    await mkdirp(dir + '/app/data/models');
    await mkdirp(dir + '/app/data/providers');
    await mkdirp(dir + '/app/data/repositories');
    await mkdirp(dir + '/app/data/services');
    await mkdirp(dir + '/app/data/sessions');

    await mkdirp(dir + '/app/modules');
    await createGetxFeature({
      dir: `${dir}app${sep}modules`,
      fileName: 'home',
      componentName: 'home',
      getxViewsSuffix,
      fromRoot: true,
    });

    await mkdirp(dir + '/app/routes');
    await createFile(
      filePath('app/routes/app_pages.dart'), getxAppPages({ componentName: 'app_pages' })
    );
    await createFile(
      filePath('app/routes/home_routes.dart'), getxFeatureRoutes({ componentName: 'home', getxViewsSuffix, createHomeImport: true })
    );

    await createFile(
      filePath('main.dart'), flutterMain({ componentName })
    );
  }

  if (type === 'mobx-store' ) {
    await createFile(
      filePath(componentFileName), mobxStore({ componentName, fileName })
    );
  }

  setTimeout(() => {
    if (type === 'getx-feature') {
      vscode.workspace.openTextDocument(filePath(`${fileName}/${ fileName }_${lowerCase(getxViewsSuffix)}.dart`)).then(editor => {
        if (!editor) {
          return;
        }
        vscode.window.showTextDocument(editor);
      });
    } else if ((type === 'getx-structure')) {
      vscode.workspace.openTextDocument(filePath(`app/modules/home/home_${lowerCase(getxViewsSuffix)}.dart`)).then(editor => {
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
  const initDir = path.isAbsolute(targetDir) ? sep : "";
  const baseDir = __dirname;

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === "EEXIST") {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === "ENOENT") {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ["EACCES", "EPERM", "EISDIR"].indexOf(err.code) > -1;
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
    await fs.writeFile(filePath, content, err => {
      if (err) {
        vscode.window.showErrorMessage("Maker cant write to file.");
      }
    });
  } else {
    vscode.window.showWarningMessage("File already exists.");
  }
};
