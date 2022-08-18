import pascalCase from './templates/shared/functions/pascal-case';

import * as fs from 'fs';
import { snakeCase } from 'lodash';
import * as path from 'path';
import * as vscode from 'vscode';

async function implementsInterface(uri: any) {
  const editor = vscode.window.activeTextEditor;
  const textFile = editor!.document.getText();
  const sep = path.sep;

  const indexStart = textFile!.indexOf('abstract class ');
  const indexEnd = textFile!.indexOf(' {');
  const interfaceName = textFile!
    .substr(indexStart, indexEnd - indexStart)
    .replace('abstract class ', '')
    .replace(' {', '');

  const config = vscode.workspace.getConfiguration('flutterTools');
  const useIPrefixForInterfaces = config.get('useIPrefixForInterfaces') as boolean;

  let implementationName = interfaceName;

  if (useIPrefixForInterfaces) {
    implementationName = interfaceName.replace('I', '');
  } else {
    implementationName = interfaceName + 'Impl';
  }

  const wsedit = new vscode.WorkspaceEdit();
  const basePath = editor!.document.uri.fsPath.replace(
    `${snakeCase(interfaceName)}.dart`,
    ''
  );
  let implementationFilePath = `${basePath}${snakeCase(implementationName)}.dart`;

  if (fs.existsSync(implementationFilePath)) {
    const componentName = await vscode.window.showInputBox({
      prompt: 'Enter the name of the new implementation of interface:',
      ignoreFocusOut: true,
      valueSelection: [-1, -1],
    });

    if (!componentName) {
      return;
    }

    const implementationNameOriginal = implementationName;
    implementationName = `${pascalCase(componentName)}${implementationNameOriginal}`;
    const implementationFileName = `${snakeCase(componentName)}${snakeCase(
      implementationNameOriginal
    )}`;

    implementationFilePath = `${basePath}${sep}${snakeCase(implementationName)}.dart`;
  }

  if (basePath) {
    const filePath = vscode.Uri.file(implementationFilePath);

    wsedit.createFile(filePath);
    vscode.workspace.applyEdit(wsedit);

    fs.writeFileSync(
      implementationFilePath,
      `import './${snakeCase(interfaceName)}.dart';

class ${implementationName} implements ${interfaceName} {

}`,
      'utf8'
    );

    vscode.workspace.openTextDocument(implementationFilePath).then(async doc => {
      vscode.window.showTextDocument(doc);
    });
  }
}

function promptForFeatureName() {
  const FeatureNamePromptOptions = {
    prompt: 'Choice suffix name, if empty then add Impl',
    placeHolder: 'Choice suffix name',
    describe: 'teste',
  };
  return vscode.window.showInputBox(FeatureNamePromptOptions);
}

export default implementsInterface;
