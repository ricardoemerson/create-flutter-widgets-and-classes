import { getSelectedText } from './templates/shared/functions/get-selected-text';

import createComponent from './createComponent';
import implementsInterface from './implementsInterface';
import {
  chooseClassType,
  chooseInterfaceType,
  chooseMobXType,
  chooseWidgetType,
} from './quickPickFeatures';
import { wrapWithWidget } from './quickPickWrapWith';
import { expandSelection } from './selectWidget';

import * as vscode from 'vscode';

export type CreationTypes =
  | 'widget'
  | 'class'
  | 'interface'
  | 'getx-feature'
  | 'getx-service'
  | 'getx-structure'
  | 'mobx-store';

export type FeatureType =
  | 'widget'
  | 'widget-page'
  | 'class'
  | 'singleton-class'
  | 'dto'
  | 'exception'
  | 'model'
  | 'controller'
  | 'controller-change-notifier'
  | 'enum'
  | 'extension'
  | 'helper'
  | 'mixin'
  | 'interface'
  | 'interface-folder'
  | 'provider'
  | 'repository'
  | 'service'
  | 'getx-feature'
  | 'getx-service'
  | 'getx-structure'
  | 'mobx-controller'
  | 'mobx-store';

interface CreateComponentProps {
  args: any;
  type: FeatureType;
  stateFullWidget?: boolean;
}

export interface QuickPickItem {
  label: string;
  description: string;
  detail: string;
  picked: boolean;
  value: FeatureType;
}

const handleCreateFile = async ({
  args,
  type,
  stateFullWidget = false,
}: CreateComponentProps) => {
  const promptTypes = [
    'widget',
    'class',
    'interface',
    'getx-feature',
    'getx-service',
    'mobx-store',
  ];

  let componentName: string | undefined;
  let selectedType: FeatureType;
  const path = args.fsPath;

  if (type === 'getx-feature') {
    const allowCreate = path.includes('modules');

    if (!allowCreate) {
      vscode.window.showErrorMessage(
        'GetX Features can only be created from the modules folder!'
      );

      return;
    }
  } else if (type === 'getx-structure') {
    const allowCreate = path.endsWith('lib');

    if (!allowCreate) {
      vscode.window.showErrorMessage(
        'Select the lib folder to be able to create GetX App Structure.'
      );

      return;
    }
  }

  if (type == 'widget') {
    selectedType = await chooseWidgetType();
  } else if (type == 'class') {
    selectedType = await chooseClassType();
  } else if (type == 'interface') {
    selectedType = await chooseInterfaceType();
  } else if (type == 'mobx-store') {
    selectedType = await chooseMobXType();
  } else {
    selectedType = type;
  }

  if (selectedType === null) {
    return;
  }

  const typeName = selectedType.split('-').join(' ');

  if (promptTypes.includes(type)) {
    componentName = await vscode.window.showInputBox({
      prompt: `Enter the ${typeName} name:`,
      ignoreFocusOut: true,
      valueSelection: [-1, -1],
    });
  } else {
    componentName = 'structure';
  }

  if (!componentName) {
    return;
  }

  if (args) {
    createComponent(componentName!, { dir: path, type: selectedType, stateFullWidget });
  } else {
    createComponent(componentName!, { type: selectedType, stateFullWidget });
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
        command: 'extension.implementsInterface',
        title: 'Implements interface',
      });
    }

    if (selectedText !== '') {
      codeActions.push({
        command: 'extension.wrapWithWidget',
        title: 'Flutter Tools - Wrap with Widget...',
      });
    }

    return codeActions;
  }
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = [
    vscode.commands.registerCommand('extension.create-stateless-widget', args => {
      handleCreateFile({ args, type: 'widget' });
    }),
    vscode.commands.registerCommand('extension.create-stateful-widget', args => {
      handleCreateFile({ args, type: 'widget', stateFullWidget: true });
    }),
    vscode.commands.registerCommand('extension.create-getx-app-structure', args => {
      handleCreateFile({ args, type: 'getx-structure' });
    }),
    vscode.commands.registerCommand('extension.create-getx-feature', args => {
      handleCreateFile({ args, type: 'getx-feature' });
    }),
    vscode.commands.registerCommand('extension.create-getx-service', args => {
      handleCreateFile({ args, type: 'getx-service' });
    }),
    vscode.commands.registerCommand('extension.create-mobx-store', args => {
      handleCreateFile({ args, type: 'mobx-store' });
    }),
    vscode.commands.registerCommand('extension.create-class', args => {
      handleCreateFile({ args, type: 'class' });
    }),
    vscode.commands.registerCommand('extension.create-interface', args => {
      handleCreateFile({ args, type: 'interface' });
    }),

    vscode.commands.registerCommand('extension.implementsInterface', implementsInterface),
    vscode.commands.registerCommand('extension.wrapWithWidget', wrapWithWidget),
    vscode.commands.registerCommand('extension.selectWidget', function () {
      expandSelection(true);
    }),

    vscode.languages.registerCodeActionsProvider(
      { pattern: '**/*.{dart,dartx}', scheme: 'file' },
      new CodeActionProvider()
    ),
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
