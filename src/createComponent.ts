import * as fs from 'fs';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as vscode from 'vscode';


import statelessWidget from './templates/statelessWidget';
import statefulWidget from './templates/statefulWidget';
import clazz from './templates/clazz';
import interfaceClazz from './templates/interfaceClazz';
import mobxStore from './templates/mobxStore';
import { camelCase, kebabCase, snakeCase, upperFirst } from 'lodash';
import pascalCase from './templates/shared/functions/pascal-case';
import clazzImplementation from './templates/clazzImplementation';
import getxFeatureBinding from './templates/getxFeatureBinding';
import getxFeatureController from './templates/getxFeatureController';
import getxFeatureView from './templates/getxFeatureView';
import getxFeatureRoutes from './templates/getxFeatureRoutes';

interface ComponentProps {
  dir?: string;
  type: 'widget' | 'class' | 'model' | 'controller' | 'interface' | 'provider' | 'repository' | 'service' | 'getx feature' | 'getx route' | 'store';
  stateFullWidget?: boolean;
}

export default async (componentName: string, { dir, type, stateFullWidget = false }: ComponentProps) => {
  // Load configurations.
  const config = vscode.workspace.getConfiguration("createFlutterWidgetsAndClasses");
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
  } else if (type === 'model') {
    componentName += 'Model';
    componentFileName = `${ fileName }_model.dart`;
  } else if (type === 'getx route') {
    componentFileName = `${ fileName }_routes.dart`;
  } else {
    componentFileName = `${ fileName }.dart`;
  }

  if (!dir) {
    dir =
      (await vscode.window.showInputBox({
        value: "/",
        prompt: `Path from root`,
        ignoreFocusOut: true,
        valueSelection: [-1, -1]
      })) || "";
  }

  if (!dir.includes(projectRoot)) {
    dir = projectRoot + dir;
  }

  if (dir[dir.length - 1] !== "/") {
    dir = dir + "/";
  }

  let dirWithFileName: string;


  const filePath = (fileName: string) => {
    return dir + "/" + fileName;

    // return dirWithFileName + "/" + fileName;
  }

  const filePathFeature = (folderName: string, fileName: string) => {
    return dir + "/" + folderName + "/" + fileName;

    // return dirWithFileName + "/" + fileName;
  }

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

  if (type === 'class' || type === 'controller' || type === 'model') {
    await createFile(
      filePath(componentFileName), clazz({ componentName })
    );
  }

  if (type === 'getx route') {
    await createFile(
      filePath(componentFileName), getxFeatureRoutes({ componentName })
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

  if (type === 'getx feature' ) {
    await mkdirp(dir + '/' + fileName);

    await createFile(
      filePathFeature(fileName, `${ fileName }_binding.dart`), getxFeatureBinding({ componentName, fileName })
    );

    await createFile(
      filePathFeature(fileName, `${ fileName }_controller.dart`), getxFeatureController({ componentName, fileName })
    );

    await createFile(
      filePathFeature(fileName, `${ fileName }_view.dart`), getxFeatureView({ componentName, fileName })
    );
  }

  if (type === 'store' ) {
    await createFile(
      filePath(componentFileName), mobxStore({ componentName, fileName })
    );
  }

  setTimeout(() => {
    if (type === 'getx feature') {
      vscode.workspace.openTextDocument(filePath(`${fileName}/${ fileName }_view.dart`)).then(editor => {
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
