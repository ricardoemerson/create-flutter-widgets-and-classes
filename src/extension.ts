import * as vscode from 'vscode';

import createComponent from './createComponent';
import implementsInterface from './implementsInterface';
import { getSelectedText } from './templates/shared/functions/get-selected-text';
import { wrapWithExpanded, wrapWithForm, wrapWithGestureDetector, wrapWithHero, wrapWithObserver, wrapWithObx, wrapWithPositioned, wrapWithSafeArea, wrapWithSingleChildScrollView, wrapWithClipRRect, wrapWithStack, wrapWithAlign, wrapWithLayoutBuilder } from './templates/wrapWith';

interface CreateComponentProps {
  args: any;
  type: 'widget' | 'class' | 'dto' | 'model' | 'controller' | 'interface' | 'provider' | 'repository' | 'service' | 'getx-feature' |'getx-service' | 'getx-structure' | 'mobx-store';
  stateFullWidget?: boolean;
}

const handleCreateFile = async ({ args, type, stateFullWidget = false }: CreateComponentProps) => {
  let promptTypes = ['widget', 'class', 'dto' , 'model', 'controller', 'interface', 'provider', 'repository', 'service', 'getx-feature', 'getx-service', 'mobx-store'];

  let componentName: string | undefined;
  const typeName = type.split('-').join(' ');
  const path = args.fsPath;

  if (type === 'getx-feature') {
    const allowCreate = path.includes('modules');

    if (!allowCreate) {
      vscode.window.showErrorMessage('GetX Features can only be created from the modules folder!');

      return;
    }
  } else if (type === 'getx-structure') {
    const allowCreate = path.endsWith('lib');

    if (!allowCreate) {
      vscode.window.showErrorMessage('Select the lib folder to be able to create GetX App Structure.');

      return;
    }
  }

  if (promptTypes.includes(type)) {
    componentName = await vscode.window.showInputBox({
      prompt: `Enter the ${ typeName } name:`,
      ignoreFocusOut: true,
      valueSelection: [-1, -1]
    });
  } else {
    componentName = 'structure';
  }

  if (!componentName) {
    return;
  }

  if (args) {
    createComponent(componentName!, { dir: path, type, stateFullWidget });
  } else {
    createComponent(componentName!, { type, stateFullWidget });
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
    const textFile = editor.document.getText();

    if (textFile.includes('abstract')) {
			codeActions.push({
				command: "extension.implementsInterface",
				title: "Implements interface"
			});
		}

    if (selectedText !== '') {
      codeActions.push({
        command: "extension.wrapWithLayoutBuilder",
        title: "Wrap with LayoutBuilder"
      });

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
        command: "extension.wrapWithAlign",
        title: "Wrap with Align"
      });

      codeActions.push({
        command: "extension.wrapWithClipRRect",
        title: "Wrap with ClipRRect"
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
    vscode.commands.registerCommand("extension.create-getx-app-structure", args => {
      handleCreateFile({ args, type: 'getx-structure' });
    }),
    vscode.commands.registerCommand("extension.create-getx-feature", args => {
      handleCreateFile({ args, type: 'getx-feature' });
    }),
    vscode.commands.registerCommand("extension.create-getx-service", args => {
      handleCreateFile({ args, type: 'getx-service' });
    }),
    vscode.commands.registerCommand("extension.create-mobx-store", args => {
      handleCreateFile({ args, type: 'mobx-store' });
    }),
    vscode.commands.registerCommand("extension.create-interface-provider", args => {
      handleCreateFile({ args, type: 'provider' });
    }),
    vscode.commands.registerCommand("extension.create-interface-repository", args => {
      handleCreateFile({ args, type: 'repository' });
    }),
    vscode.commands.registerCommand("extension.create-interface-service", args => {
      handleCreateFile({ args, type: 'service' });
    }),
    vscode.commands.registerCommand("extension.create-class", args => {
      handleCreateFile({ args, type: 'class' });
    }),
    vscode.commands.registerCommand("extension.create-controller", args => {
      handleCreateFile({ args, type: 'controller' });
    }),
    vscode.commands.registerCommand("extension.create-dto", args => {
      handleCreateFile({ args, type: 'dto' });
    }),
    vscode.commands.registerCommand("extension.create-interface", args => {
      handleCreateFile({ args, type: 'interface' });
    }),
    vscode.commands.registerCommand("extension.create-model", args => {
      handleCreateFile({ args, type: 'model' });
    }),

    vscode.commands.registerCommand('extension.implementsInterface', implementsInterface),

    vscode.commands.registerCommand("extension.wrapWithLayoutBuilder", wrapWithLayoutBuilder),
    vscode.commands.registerCommand("extension.wrapWithExpanded", wrapWithExpanded),
    vscode.commands.registerCommand("extension.wrapWithStack", wrapWithStack),
    vscode.commands.registerCommand("extension.wrapWithPositioned", wrapWithPositioned),
    vscode.commands.registerCommand("extension.wrapWithAlign", wrapWithAlign),
    vscode.commands.registerCommand("extension.wrapWithClipRRect", wrapWithClipRRect),
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
