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
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
