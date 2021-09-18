import * as fs from 'fs';
import { camelCase, kebabCase, snakeCase } from 'lodash';
import * as vscode from 'vscode';
import pascalCase from './templates/shared/functions/pascal-case';

async function implementsInterface(uri: any) {
  let editor = vscode.window.activeTextEditor;
  const textFile = editor!.document.getText();

  const indexStart = textFile!.indexOf('abstract class ');
  const indexEnd = textFile!.indexOf(' {');
  const interfaceName = textFile!.substr(indexStart, indexEnd - indexStart).replace('abstract class', '').replace(' {', '');

  const config = vscode.workspace.getConfiguration("createFlutterWidgetsAndClasses");
  const useIPrefixForInterfaces = config.get("useIPrefixForInterfaces") as boolean;

  let implementationName = interfaceName;

  if(useIPrefixForInterfaces) {
    implementationName = interfaceName.replace('I', '');
  } else {
    implementationName = interfaceName + 'Impl';
  }

  let wsedit = new vscode.WorkspaceEdit();
  let basePath = editor!.document.uri.fsPath.replace(`${ snakeCase(interfaceName) }.dart`, '');
  let path = `${basePath}/${snakeCase(implementationName)}.dart`;

  if (basePath) {
    const filePath = vscode.Uri.file(path);

    wsedit.createFile(filePath);

    vscode.workspace.applyEdit(wsedit);
    fs.writeFileSync(path, `import './${snakeCase(interfaceName)}.dart';

class${implementationName} implements${interfaceName} {

}`, 'utf8');

    vscode.workspace.openTextDocument(path).then(async doc => {
        vscode.window.showTextDocument(doc);
    });
  }
}

function promptForFeatureName() {
	const FeatureNamePromptOptions = {
		prompt: 'Choice suffix name, if empty then add Impl',
		placeHolder: "Choice suffix name",
        describe: 'teste'
	};
	return vscode.window.showInputBox(FeatureNamePromptOptions);
}


export default implementsInterface;
