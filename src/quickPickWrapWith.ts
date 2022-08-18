import {
  wrapWithAlign,
  wrapWithClipRRect,
  wrapWithConstrainedBox,
  wrapWithExpanded,
  wrapWithFlexible,
  wrapWithForm,
  wrapWithGestureDetector,
  wrapWithHero,
  wrapWithInkWell,
  wrapWithIntrinsicHeight,
  wrapWithIntrinsicWidth,
  wrapWithLayoutBuilder,
  wrapWithLayoutBuilderWithSingleChildScrollView,
  wrapWithObserver,
  wrapWithObx,
  wrapWithPositioned,
  wrapWithSafeArea,
  wrapWithSingleChildScrollView,
  wrapWithStack,
  wrapWithValueListenableBuilder,
  wrapWithVisibility,
} from './templates/wrapWith';

import { orderBy } from 'lodash';
import * as vscode from 'vscode';
import { window } from 'vscode';

type WrapWidgetType =
  | 'align'
  | 'clip-r-rect'
  | 'constrained-box'
  | 'expanded'
  | 'flexible'
  | 'form'
  | 'gesture-detector'
  | 'hero'
  | 'ink-well'
  | 'intrinsic-height'
  | 'intrinsic-width'
  | 'layout-builder'
  | 'layout-builder-with-single-child-scroll-view'
  | 'observer'
  | 'obx'
  | 'positioned'
  | 'safe-area'
  | 'single-child-scroll-view'
  | 'stack'
  | 'value-listenable-builder'
  | 'visibility';

interface QuickPickItem {
  label: string;
  description: string;
  picked: boolean;
  value: WrapWidgetType;
}

export async function wrapWithWidget() {
  const selectedWrap = await chooseWrapWithWidget();

  const editor = vscode.window.activeTextEditor;

  if (editor) {
    const { document } = editor;
    window.showTextDocument(document).then(() => {});
    switch (selectedWrap) {
      case 'align':
        wrapWithAlign();
        break;

      case 'clip-r-rect':
        wrapWithClipRRect();
        break;

      case 'constrained-box':
        wrapWithConstrainedBox();
        break;

      case 'expanded':
        wrapWithExpanded();
        break;

      case 'flexible':
        wrapWithFlexible();
        break;

      case 'form':
        wrapWithForm();
        break;

      case 'gesture-detector':
        wrapWithGestureDetector();
        break;

      case 'hero':
        wrapWithHero();
        break;

      case 'ink-well':
        wrapWithInkWell();
        break;

      case 'intrinsic-height':
        wrapWithIntrinsicHeight();
        break;

      case 'intrinsic-width':
        wrapWithIntrinsicWidth();
        break;

      case 'layout-builder':
        wrapWithLayoutBuilder();
        break;

      case 'layout-builder-with-single-child-scroll-view':
        wrapWithLayoutBuilderWithSingleChildScrollView();
        break;

      case 'observer':
        wrapWithObserver();
        break;

      case 'obx':
        wrapWithObx();
        break;

      case 'positioned':
        wrapWithPositioned();
        break;

      case 'safe-area':
        wrapWithSafeArea();
        break;

      case 'single-child-scroll-view':
        wrapWithSingleChildScrollView();
        break;

      case 'stack':
        wrapWithStack();
        break;

      case 'value-listenable-builder':
        wrapWithValueListenableBuilder();
        break;

      case 'visibility':
        wrapWithVisibility();
        break;
    }
  }
}

async function chooseWrapWithWidget() {
  const config = vscode.workspace.getConfiguration('flutterTools');
  const getxDisplayContextMenu = config.get('getxDisplayContextMenu') as boolean;
  const mobxDisplayContextMenu = config.get('mobxDisplayContextMenu') as boolean;

  const quickPickItems: QuickPickItem[] = [
    {
      label: 'Wrap with Align',
      description: 'Wrap the selected widget with Align',
      picked: false,
      value: 'align',
    },
    {
      label: 'Wrap with ClipRRect',
      description: 'Wrap the selected widget with ClipRRect',
      picked: false,
      value: 'clip-r-rect',
    },
    {
      label: 'Wrap with ConstrainedBox',
      description: 'Wrap the selected widget with ConstrainedBox',
      picked: false,
      value: 'constrained-box',
    },
    {
      label: 'Wrap with Expanded',
      description: 'Wrap the selected widget with Expanded',
      picked: false,
      value: 'expanded',
    },
    {
      label: 'Wrap with Flexible',
      description: 'Wrap the selected widget with Flexible',
      picked: false,
      value: 'flexible',
    },
    {
      label: 'Wrap with Form',
      description: 'Wrap the selected widget with Form',
      picked: false,
      value: 'form',
    },
    {
      label: 'Wrap with GestureDetector',
      description: 'Wrap the selected widget with GestureDetector',
      picked: false,
      value: 'gesture-detector',
    },
    {
      label: 'Wrap with Hero',
      description: 'Wrap the selected widget with Hero',
      picked: false,
      value: 'hero',
    },
    {
      label: 'Wrap with InkWell',
      description: 'Wrap the selected widget with InkWell',
      picked: false,
      value: 'ink-well',
    },
    {
      label: 'Wrap with IntrinsicHeight',
      description: 'Wrap the selected widget with IntrinsicHeight',
      picked: false,
      value: 'intrinsic-height',
    },
    {
      label: 'Wrap with IntrinsicWidth',
      description: 'Wrap the selected widget with IntrinsicWidth',
      picked: false,
      value: 'intrinsic-width',
    },
    {
      label: 'Wrap with LayoutBuilder',
      description: 'Wrap the selected widget with LayoutBuilder',
      picked: false,
      value: 'layout-builder',
    },
    {
      label: 'Wrap with LayoutBuilder and SingleChildScrollView',
      description:
        'Wrap the selected widget with LayoutBuilder and SingleChildScrollView',
      picked: false,
      value: 'layout-builder-with-single-child-scroll-view',
    },
    {
      label: 'Wrap with Positioned',
      description: 'Wrap the selected widget with Positioned',
      picked: false,
      value: 'positioned',
    },
    {
      label: 'Wrap with SafeArea',
      description: 'Wrap the selected widget with SafeArea',
      picked: false,
      value: 'safe-area',
    },
    {
      label: 'Wrap with SingleChildScrollView',
      description: 'Wrap the selected widget with SingleChildScrollView',
      picked: false,
      value: 'single-child-scroll-view',
    },
    {
      label: 'Wrap with Stack',
      description: 'Wrap the selected widget with Stack',
      picked: false,
      value: 'stack',
    },
    {
      label: 'Wrap with ValueListenableBuilder',
      description: 'Wrap the selected widget with ValueListenableBuilder',
      picked: false,
      value: 'value-listenable-builder',
    },
    {
      label: 'Wrap with Visibility',
      description: 'Wrap the selected widget with Visibility',
      picked: false,
      value: 'visibility',
    },
  ];

  if (mobxDisplayContextMenu) {
    const mobxItem: QuickPickItem = {
      label: 'Wrap with Observer for MobX',
      description: 'Wrap the selected widget with Observer fro MobX',
      picked: false,
      value: 'observer',
    };

    quickPickItems.push(mobxItem);
  }

  if (getxDisplayContextMenu) {
    const getxItem: QuickPickItem = {
      label: 'Wrap with Obx for GetX',
      description: 'Wrap the selected widget with Obx for GetX',
      picked: false,
      value: 'obx',
    };

    quickPickItems.push(getxItem);
  }

  const sortedItems = orderBy(quickPickItems, 'label');

  const wrapWithWidget = (await vscode.window.showQuickPick(sortedItems, {
    placeHolder: 'Choose wished widget to wrap the selected widget.',
  })) as any;

  return wrapWithWidget ? wrapWithWidget.value : null;
}
