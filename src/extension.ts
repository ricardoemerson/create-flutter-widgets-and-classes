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
import { ExtensionContext, window, extensions, MessageItem, env, Uri } from 'vscode';

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
        title: 'Flutter Tools - Wrap with widget...',
      });
    }

    return codeActions;
  }
}

const LAST_VERSION_KEY =
  'ricardo-emerson.create-flutter-widgets-and-classes:last-version';
const PENDING_FOCUS = 'ricardo-emerson.create-flutter-widgets-and-classes:pending-focus';

async function showWelcomeOrWhatsNew(
  context: ExtensionContext,
  version: string,
  previousVersion: string | undefined
) {
  if (previousVersion !== version) {
    if (window.state.focused) {
      void context.globalState.update(PENDING_FOCUS, undefined);
      void context.globalState.update(LAST_VERSION_KEY, version);
      void showMessage(version, previousVersion);
    } else {
      // Save pending on window getting focus
      await context.globalState.update(PENDING_FOCUS, true);
      const disposable = window.onDidChangeWindowState(e => {
        if (!e.focused) {
          return;
        }

        disposable.dispose();

        // If the window is now focused and we are pending the welcome, clear the pending state and show the welcome
        if (context.globalState.get(PENDING_FOCUS) === true) {
          void context.globalState.update(PENDING_FOCUS, undefined);
          void context.globalState.update(LAST_VERSION_KEY, version);
          void showMessage(version, previousVersion);
        }
      });

      context.subscriptions.push(disposable);
    }
  }
}

async function showMessage(version: string, previousVersion?: string) {
  const whatsNew = { title: "What's New" };
  const giveAStar = { title: '★ Give a star' };
  const writeReview = { title: '★ Write a review' };
  const sponsor = { title: '❤ Sponsor' };
  const actions: MessageItem[] = [giveAStar, writeReview, sponsor];

  if (previousVersion) {
    actions.unshift(whatsNew);
  }

  const message = previousVersion
    ? `Flutter Tools has been updated to v${version}! — check out what's new!`
    : 'Thanks for using Flutter Tools — have a great day at work! 🖖🏻 Cheers,';

  const result = await window.showInformationMessage(message, ...actions);

  if (result !== null) {
    if (result === whatsNew) {
      await env.openExternal(
        Uri.parse(
          'https://marketplace.visualstudio.com/items/ricardo-emerson.create-flutter-widgets-and-classes/changelog'
        )
      );
    } else if (result === giveAStar) {
      await env.openExternal(
        Uri.parse('https://github.com/ricardoemerson/create-flutter-widgets-and-classes')
      );
    } else if (result === writeReview) {
      await env.openExternal(
        Uri.parse(
          'https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.create-flutter-widgets-and-classes&ssr=false#review-details'
        )
      );
    } else if (result === sponsor) {
      await env.openExternal(
        Uri.parse('https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96')
      );
    }
  }
}

export function activate(context: vscode.ExtensionContext) {
  const previousVersion = context.globalState.get<string>(LAST_VERSION_KEY);
  const extensionData = extensions.getExtension(
    'ricardo-emerson.create-flutter-widgets-and-classes'
  )!;
  const currentVersion = extensionData.packageJSON.version;

  showWelcomeOrWhatsNew(context, currentVersion, previousVersion);

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
