import * as vscode from 'vscode';

import createComponent from './createComponent';

interface CreateComponentProps {
  args: any;
  type: 'widget' | 'class' | 'store';
  stateFullWidget?: boolean;
}

const handleCreateFile = async ({ args, type, stateFullWidget = false }: CreateComponentProps) => {
  const componentName = await vscode.window.showInputBox({
    prompt: `Enter the ${ type } name:`,
    ignoreFocusOut: true,
    valueSelection: [-1, -1]
  });

  if (!componentName) {
    return;
  }

  if (args) {
    const path = args.fsPath;
    createComponent(componentName, { dir: path, type, stateFullWidget });
  } else {
    createComponent(componentName, { type, stateFullWidget });
  }
};

export const nextElementIsValid = (code: string, length: number): Boolean => {
  for (let index = 0; index < 1000; index++) {
    const text = code.charAt(length).trim();

    if (text) {
      if (/[;),\]]/.test(text)) {
        return true;
      } else {
        return false;
      }
    }

    length++;
  }

  return false;
};

export const getSelectedText = (editor: vscode.TextEditor): vscode.Selection => {
  let offset_l = editor.document.offsetAt(editor.selection.start);
  let offset_r = editor.document.offsetAt(editor.selection.end) - 1;
  let text = editor.document.getText();

  const re = /[^a-zA-Z]/;

  for (let index = (text.length - offset_l); index > 0; index--) {
    let textOff = text.charAt(offset_l);

    if (textOff !== '.' && re.test(textOff)) {
      offset_l++;

      if (/[^A-Z]/.test(text.charAt(offset_l))) {
        return new vscode.Selection(editor.document.positionAt(0), editor.document.positionAt(0));
      }

      let lineText: string = editor.document.lineAt(editor.document.positionAt(offset_l).line).text;

      if (lineText.indexOf('class') != -1 || lineText.indexOf('extends') != -1 || lineText.indexOf('with') != -1 || lineText.indexOf('implements') != -1 || lineText.indexOf('=') != -1) {

        return new vscode.Selection(editor.document.positionAt(0), editor.document.positionAt(0));
      }

      break;
    } else {
      offset_l--;
    }
  }

  let l = 0;
  let r = 0;

  for (let index = (text.length - offset_r); index < text.length; index++) {
    if (text.charAt(offset_r) === '(') {
      l++;
    }

    if (text.charAt(offset_r) === ')') {
      r++
    }

    if (r > l || index == text.length) {
      offset_r = 0;
      offset_l = 0;
      break;
    }

    if (l > 0 && l == r) {
      offset_r++;

      if (!nextElementIsValid(text, offset_r)) {
        offset_r = 0;
        offset_l = 0;
      }

      break;
    }

    offset_r++;
  }

  return new vscode.Selection(editor.document.positionAt(offset_l), editor.document.positionAt(offset_r));
};

export class CodeActionProvider implements vscode.CodeActionProvider {
  public provideCodeActions(): vscode.Command[] {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      return [];
    }

    const selectedText = editor.document.getText(getSelectedText(editor));
    const codeActions = [];

    if (selectedText !== '') {
      codeActions.push({
        command: "extension.wrapObserver",
        title: "Wrap with Observer"
      });

      codeActions.push({
        command: "extension.wrapStack",
        title: "Wrap with Stack"
      });

      codeActions.push({
        command: "extension.wrapExpanded",
        title: "Wrap with Expanded"
      });

      codeActions.push({
        command: "extension.wrapPositioned",
        title: "Wrap with Positioned"
      });

      codeActions.push({
        command: "extension.wrapForm",
        title: "Wrap with Form"
      });

      codeActions.push({
        command: "extension.wrapSafeArea",
        title: "Wrap with SafeArea"
      });
    }

    return codeActions;
  }
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = [
    vscode.commands.registerCommand("extension.create-stateless-widget", args => {
      handleCreateFile({ args, type: 'widget' });
    }),
    vscode.commands.registerCommand("extension.create-stateful-widget", args => {
      handleCreateFile({ args, type: 'widget', stateFullWidget: true });
    }),
    vscode.commands.registerCommand("extension.create-class", args => {
      handleCreateFile({ args, type: 'class' });
    }),
    vscode.commands.registerCommand("extension.create-mobx-store", args => {
      handleCreateFile({ args, type: 'store' });
    }),
    vscode.languages.registerCodeActionsProvider(
      { pattern: "**/*.{dart,dartx}", scheme: "file" },
      new CodeActionProvider()
    )
  ];
  context.subscriptions.push(...disposable);

  let disposableWrapObserver = vscode.commands.registerCommand('extension.wrapObserver', async () => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) { return; }
    const selectedText = getSelectedText(editor);
    const text = editor.document.getText(selectedText);
    const newTextWidget = `Observer(builder: (_) {return ${text};})`;

    await editor.edit(edit => {
      edit.replace(selectedText, newTextWidget);
    });
    await vscode.commands.executeCommand(
      "editor.action.formatDocument"
    );
  });
  context.subscriptions.push(disposableWrapObserver);

  let disposableWrapStack = vscode.commands.registerCommand('extension.wrapStack', async () => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) { return; }
    const selectedText = getSelectedText(editor);
    const text = editor.document.getText(selectedText);
    const newTextWidget = `Stack(children: [${text},],)`;

    await editor.edit(edit => {
      edit.replace(selectedText, newTextWidget);
    });
    await vscode.commands.executeCommand(
      "editor.action.formatDocument"
    );
  });
  context.subscriptions.push(disposableWrapStack);

  let disposableWrapExpanded = vscode.commands.registerCommand('extension.wrapExpanded', async () => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) { return; }
    const selectedText = getSelectedText(editor);
    const text = editor.document.getText(selectedText);
    const newTextWidget = `Expanded(child: ${text},)`;

    await editor.edit(edit => {
      edit.replace(selectedText, newTextWidget);
    });
    await vscode.commands.executeCommand(
      "editor.action.formatDocument"
    );
  });
  context.subscriptions.push(disposableWrapExpanded);

  let disposableWrapPositioned = vscode.commands.registerCommand('extension.wrapPositioned', async () => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) { return; }
    const selectedText = getSelectedText(editor);
    const text = editor.document.getText(selectedText);
    const newTextWidget = `Positioned(child: ${text},)`;

    await editor.edit(edit => {
      edit.replace(selectedText, newTextWidget);
    });
    await vscode.commands.executeCommand(
      "editor.action.formatDocument"
    );
  });
  context.subscriptions.push(disposableWrapPositioned);

  let disposableWrapForm = vscode.commands.registerCommand('extension.wrapForm', async () => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) { return; }
    const selectedText = getSelectedText(editor);
    const text = editor.document.getText(selectedText);
    const newTextWidget = `Form(child: ${text},)`;

    await editor.edit(edit => {
      edit.replace(selectedText, newTextWidget);
    });
    await vscode.commands.executeCommand(
      "editor.action.formatDocument"
    );
  });
  context.subscriptions.push(disposableWrapForm);

  let disposableWrapSafeArea = vscode.commands.registerCommand('extension.wrapSafeArea', async () => {
    let editor = vscode.window.activeTextEditor;
    if (!editor) { return; }
    const selectedText = getSelectedText(editor);
    const text = editor.document.getText(selectedText);
    const newTextWidget = `SafeArea(child: ${text},)`;

    await editor.edit(edit => {
      edit.replace(selectedText, newTextWidget);
    });
    await vscode.commands.executeCommand(
      "editor.action.formatDocument"
    );
  });
  context.subscriptions.push(disposableWrapSafeArea);
}

export function deactivate() {}
