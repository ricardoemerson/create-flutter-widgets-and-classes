import { QuickPickItem } from './extension';

import * as vscode from 'vscode';

export async function chooseWidgetType(stateFulWidget: boolean) {
  const widgetMessage = stateFulWidget ? 'Stateful Widget' : 'Stateless Widget';
  const widgetType = (await vscode.window.showQuickPick(
    [
      {
        label: `🧩 Create ${widgetMessage} as a Component`,
        description: 'Create a widget without Scaffold.',
        detail: '',
        picked: true,
        value: 'widget',
        group: 'group-a',
      },
      {
        label: `📑 Create ${widgetMessage} as a Page`,
        description: 'Create a widget with Scaffold.',
        detail: '',
        picked: false,
        value: 'widget-page',
        group: 'group-b',
      },
    ] as QuickPickItem[],
    {
      placeHolder: 'Choose the type of your Widget',
    }
  )) as any;

  return widgetType ? widgetType.value : null;
}

export async function chooseInterfaceType() {
  const interfaceType = (await vscode.window.showQuickPick(
    [
      {
        label: '📄 Create Interface Class',
        description:
          'Create an interface class and a folder can be created that contains the interface and the interface implementation.',
        detail: '',
        picked: true,
        value: 'interface-folder',
      },
      {
        label: '📄 Create Provider Interface',
        description: 'Create a provider interface.',
        detail: '',
        picked: false,
        value: 'provider',
      },
      {
        label: '📄 Create Repository Interface',
        description: 'Create a repository interface.',
        detail: '',
        picked: false,
        value: 'repository',
      },
      {
        label: '📄 Create Service Interface',
        description: 'Create a service interface.',
        detail: '',
        picked: false,
        value: 'service',
      },
    ] as QuickPickItem[],
    {
      placeHolder: 'Choose the type of your Interface',
    }
  )) as any;

  return interfaceType ? interfaceType.value : null;
}

export async function chooseClassType() {
  const classType = (await vscode.window.showQuickPick(
    [
      {
        label: '📝 Create Class',
        description: 'Create a default class.',
        detail: '',
        picked: true,
        value: 'class',
      },
      {
        label: '📝 Create Controller Class',
        description: 'Create a controller class.',
        detail: '',
        picked: false,
        value: 'controller',
      },
      {
        label: '📝 Create Controller Class with ChangeNotifier',
        description: 'Create a controller class that extends ChangeNotifier.',
        detail: '',
        picked: false,
        value: 'controller-change-notifier',
      },
      {
        label: '📝 Create DTO Class',
        description: 'Create a DTO class.',
        detail: '',
        picked: false,
        value: 'dto',
      },
      {
        label: '📃 Create Enum',
        description: 'Create an enum.',
        detail: '',
        picked: false,
        value: 'enum',
      },
      {
        label: '⛔ Create Exception Class',
        description: 'Create an exception class.',
        detail: '',
        picked: false,
        value: 'exception',
      },
      {
        label: '📇 Create Extension',
        description: 'Create an extension.',
        detail: '',
        picked: false,
        value: 'extension',
      },
      {
        label: '📝 Create Helper Class',
        description: 'Create a helper class.',
        detail: '',
        picked: false,
        value: 'helper',
      },
      {
        label: '📄 Create Interface Class',
        description: 'Create an interface class.',
        detail: '',
        picked: false,
        value: 'interface',
      },
      {
        label: '📒 Create Mixin',
        description: 'Create a mixin.',
        detail: '',
        picked: false,
        value: 'mixin',
      },
      {
        label: '📝 Create Model Class',
        description: 'Create a model class.',
        detail: '',
        picked: false,
        value: 'model',
      },
      {
        label: '📝 Create Singleton Class',
        description: 'Create a singleton class.',
        detail: '',
        picked: false,
        value: 'singleton-class',
      },
    ] as QuickPickItem[],
    {
      placeHolder: 'Choose the type of Class',
    }
  )) as any;

  return classType ? classType.value : null;
}

export async function chooseMobXType() {
  const mobXStoreType = (await vscode.window.showQuickPick(
    [
      {
        label: '🗂️ MobX Store as Controller',
        description: 'Create a MobX store using the Controller suffix.',
        detail: '',
        picked: true,
        value: 'mobx-controller',
      },
      {
        label: '📦 MobX Store as Store',
        description: 'Create a MobX store using the Store suffix.',
        detail: '',
        picked: false,
        value: 'mobx-store',
      },
    ] as QuickPickItem[],
    {
      placeHolder: 'Choose the suffix for the MobX Store',
    }
  )) as any;

  return mobXStoreType ? mobXStoreType.value : null;
}
