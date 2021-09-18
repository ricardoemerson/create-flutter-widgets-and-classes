import * as vscode from 'vscode';

import createComponent from './createComponent';
import { getSelectedText } from './templates/shared/functions/get-selected-text';
import { wrapWithExpanded, wrapWithForm, wrapWithGestureDetector, wrapWithHero, wrapWithObserver, wrapWithObx, wrapWithPositioned, wrapWithSafeArea, wrapWithSingleChildScrollView, wrapWithSizedBox, wrapWithStack } from './templates/wrapWith';

interface CreateComponentProps {
  args: any;
  type: 'widget' | 'class' | 'interface' | 'store';
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
        command: "extension.wrapWithExpanded",
        title: "Wrap with Expanded"
      });

      codeActions.push({
        command: "extension.wrapWithStack",
        title: "Wrap with Stack"
      });

      codeActions.push({
        command: "extension.wrapWithPositioned",
        title: "Wrap with Positioned"
      });

      codeActions.push({
        command: "extension.wrapWithSizedBox",
        title: "Wrap with SizedBox"
      });

      codeActions.push({
        command: "extension.wrapWithHero",
        title: "Wrap with Hero"
      });

      codeActions.push({
        command: "extension.wrapWithGestureDetector",
        title: "Wrap with GestureDetector"
      });

      codeActions.push({
        command: "extension.wrapWithSingleChildScrollView",
        title: "Wrap with SingleChildScrollView"
      });

      codeActions.push({
        command: "extension.wrapWithSafeArea",
        title: "Wrap with SafeArea"
      });

      codeActions.push({
        command: "extension.wrapWithForm",
        title: "Wrap with Form"
      });

      codeActions.push({
        command: "extension.wrapWithObx",
        title: "Wrap with Obx"
      });

      codeActions.push({
        command: "extension.wrapWithObserver",
        title: "Wrap with Observer"
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
    vscode.commands.registerCommand("extension.create-interface", args => {
      handleCreateFile({ args, type: 'interface' });
    }),
    vscode.commands.registerCommand("extension.create-mobx-store", args => {
      handleCreateFile({ args, type: 'store' });
    }),

    vscode.commands.registerCommand("extension.wrapWithExpanded", wrapWithExpanded),
    vscode.commands.registerCommand("extension.wrapWithStack", wrapWithStack),
    vscode.commands.registerCommand("extension.wrapWithPositioned", wrapWithPositioned),
    vscode.commands.registerCommand("extension.wrapWithSizedBox", wrapWithSizedBox),
    vscode.commands.registerCommand("extension.wrapWithHero", wrapWithHero),
    vscode.commands.registerCommand("extension.wrapWithGestureDetector", wrapWithGestureDetector),
    vscode.commands.registerCommand("extension.wrapWithSingleChildScrollView", wrapWithSingleChildScrollView),
    vscode.commands.registerCommand("extension.wrapWithSafeArea", wrapWithSafeArea),
    vscode.commands.registerCommand("extension.wrapWithForm", wrapWithForm),
    vscode.commands.registerCommand("extension.wrapWithObx", wrapWithObx),
    vscode.commands.registerCommand("extension.wrapWithObserver", wrapWithObserver),

    vscode.languages.registerCodeActionsProvider(
      { pattern: "**/*.{dart,dartx}", scheme: "file" },
      new CodeActionProvider()
    )
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
