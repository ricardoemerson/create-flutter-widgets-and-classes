import * as vscode from 'vscode';

import createComponent from './createComponent';
import implementsInterface from './implementsInterface';
import { getSelectedText } from './templates/shared/functions/get-selected-text';
import { wrapWithExpanded, wrapWithForm, wrapWithGestureDetector, wrapWithHero, wrapWithObserver, wrapWithObx, wrapWithPositioned, wrapWithSafeArea, wrapWithSingleChildScrollView, wrapWithClipRRect, wrapWithStack, wrapWithAlign, wrapWithLayoutBuilder, wrapWithValueListenableBuilder, wrapWithInkWell } from './templates/wrapWith';
import { bracketUtil } from './bracketUtil';
import * as history from './selectionHistory';

interface CreateComponentProps {
  args: any;
  type: 'widget' | 'widget-page' | 'class' | 'singleton-class' | 'dto' | 'exception' | 'model' | 'controller' | 'interface' | 'provider' | 'repository' | 'service' | 'getx-feature' |'getx-service' | 'getx-structure' | 'mobx-controller' | 'mobx-store';
  stateFullWidget?: boolean;
}

class SearchResult {
	bracket: string;
	offset: number;

	constructor(bracket: string, offset: number) {
		this.bracket = bracket;
		this.offset = offset;
	}
}

const handleCreateFile = async ({ args, type, stateFullWidget = false }: CreateComponentProps) => {
  let promptTypes = ['widget', 'widget-page', 'class', 'singleton-class', 'dto' , 'exception', 'model', 'controller', 'interface', 'provider', 'repository', 'service', 'getx-feature', 'getx-service', 'mobx-controller', 'mobx-store'];

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
        command: "extension.wrapWithValueListenableBuilder",
        title: "Wrap with ValueListenableBuilder"
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
        command: "extension.wrapWithInkWell",
        title: "Wrap with InkWell"
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
        title: "Wrap with GetX Obx"
      });

      codeActions.push({
        command: "extension.wrapWithObserver",
        title: "Wrap with MobX Observer"
      });
    }

    return codeActions;
  }
}

function findBackward(text: string, index: number): SearchResult {
	const bracketStack: string[] = [];
	let insideAngleBracket = false;
	for (let i = index; i >= 0; i--) {
		let char = text.charAt(i);
		if (bracketUtil.isOpenBracket(char)) {
			if (bracketStack.length == 0) {
				for (let j = i - 1; i >= 0; j--) {
					const char1 = text.charAt(j);
					if (char1 === '>') {
						insideAngleBracket = true;
						continue;
					}
					if (char1 === '<') {
						insideAngleBracket = false;
						continue;
					}
					if (!insideAngleBracket && !bracketUtil.isLetter(text.charAt(j))) {
						return new SearchResult(char, j + 1);
					}
				}
			} else {
				let top = bracketStack.pop();
				if (!bracketUtil.isMatch(char, top!)) {
					throw 'Unmatched bracket pair';
				}
			}
		} else if (bracketUtil.isCloseBracket(char)) {
			bracketStack.push(char);
		}
	}
	//we are getting to the edge
	return null!;
}

function findForward(text: string, index: number): SearchResult {
	const bracketStack: string[] = [];
	for (let i = index; i < text.length; i++) {
		let char = text.charAt(i);
		if (bracketUtil.isCloseBracket(char)) {
			if (bracketStack.length == 0) {
				return new SearchResult(char, i);
			} else {
				let top = bracketStack.pop();
				if (!bracketUtil.isMatch(top!, char)) {
					throw 'Unmatched bracket pair'
				}
			}
		} else if (bracketUtil.isOpenBracket(char)) {
			bracketStack.push(char);
		}
	}
	return null!;
}

function showInfo(msg: string): void {
	vscode.window.showInformationMessage(msg);
}

function getSearchContext(selection: vscode.Selection) {
	const editor = vscode.window.activeTextEditor;
	let selectionStart = editor!.document.offsetAt(selection.start);
	let selectionEnd = editor!.document.offsetAt(selection.end);
	return {
		backwardStarter: selectionStart - 1, //coverage vscode selection index to text index
		forwardStarter: selectionEnd,
		text: editor!.document.getText()
	}
}

function toVscodeSelection({ start, end }: { start: number, end: number }): vscode.Selection {
	const editor = vscode.window.activeTextEditor;
	return new vscode.Selection(
		editor!.document.positionAt(start + 1), //convert text index to vs selection index
		editor!.document.positionAt(end)
	);
}

function isMatch(r1: SearchResult, r2: SearchResult) {
	return r1 != null && r2 != null && bracketUtil.isMatch(r1.bracket, r2.bracket);
}

function expandSelection(includeBrack: boolean) {
	const editor = vscode.window.activeTextEditor;
	let originSelections = editor!.selections;

	let selections = originSelections.map((originSelection) => {
		const newSelect = selectText(includeBrack, originSelection)
		return newSelect ? toVscodeSelection(newSelect) : originSelection
	})

	let haveChange = selections.findIndex((s, i) => !s.isEqual(originSelections[i])) >= 0
	if (haveChange) {
		history.changeSelections(selections);
	}
}

function selectText(includeBrack: boolean, selection: vscode.Selection): { start: number, end: number } | void {
	const searchContext = getSearchContext(selection);
	let { text, backwardStarter, forwardStarter } = searchContext;
	if (backwardStarter < 0 || forwardStarter >= text.length) {
		return;
	}

	let selectionStart: number, selectionEnd: number;
	var backwardResult = findBackward(searchContext.text, searchContext.backwardStarter);
	var forwardResult = findForward(searchContext.text, searchContext.forwardStarter);

	while (forwardResult != null
		&& !isMatch(backwardResult, forwardResult)
	) {
		forwardResult = findForward(searchContext.text, forwardResult.offset + 1);
	}
	while (backwardResult != null
		&& !isMatch(backwardResult, forwardResult)
	) {
		backwardResult = findBackward(searchContext.text, backwardResult.offset - 1);
	}

	if (!isMatch(backwardResult, forwardResult)) {
		showInfo('No matched bracket pairs found')
		return;
	}
	// we are next to a bracket
	// this is the case for doule press select
	if (backwardStarter == backwardResult.offset && forwardResult.offset == forwardStarter) {
		selectionStart = backwardStarter - 1;
		selectionEnd = forwardStarter + 1;
	} else {
		if (includeBrack) {
			selectionStart = backwardResult.offset - 1;
			selectionEnd = forwardResult.offset + 1;
		} else {
			selectionStart = backwardResult.offset;
			selectionEnd = forwardResult.offset;
		}
	}
	return {
		start: selectionStart,
		end: selectionEnd,
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
    vscode.commands.registerCommand("extension.create-stateless-widget-page", args => {
      handleCreateFile({ args, type: 'widget-page' });
    }),
    vscode.commands.registerCommand("extension.create-stateful-widget-page", args => {
      handleCreateFile({ args, type: 'widget-page', stateFullWidget: true });
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
    vscode.commands.registerCommand("extension.create-mobx-controller", args => {
      handleCreateFile({ args, type: 'mobx-controller' });
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
    vscode.commands.registerCommand("extension.create-singleton-class", args => {
      handleCreateFile({ args, type: 'singleton-class' });
    }),
    vscode.commands.registerCommand("extension.create-controller", args => {
      handleCreateFile({ args, type: 'controller' });
    }),
    vscode.commands.registerCommand("extension.create-dto", args => {
      handleCreateFile({ args, type: 'dto' });
    }),
    vscode.commands.registerCommand("extension.create-exception", args => {
      handleCreateFile({ args, type: 'exception' });
    }),
    vscode.commands.registerCommand("extension.create-interface", args => {
      handleCreateFile({ args, type: 'interface' });
    }),
    vscode.commands.registerCommand("extension.create-model", args => {
      handleCreateFile({ args, type: 'model' });
    }),

    vscode.commands.registerCommand('extension.implementsInterface', implementsInterface),

    vscode.commands.registerCommand("extension.wrapWithLayoutBuilder", wrapWithLayoutBuilder),
    vscode.commands.registerCommand("extension.wrapWithValueListenableBuilder", wrapWithValueListenableBuilder),
    vscode.commands.registerCommand("extension.wrapWithExpanded", wrapWithExpanded),
    vscode.commands.registerCommand("extension.wrapWithStack", wrapWithStack),
    vscode.commands.registerCommand("extension.wrapWithPositioned", wrapWithPositioned),
    vscode.commands.registerCommand("extension.wrapWithAlign", wrapWithAlign),
    vscode.commands.registerCommand("extension.wrapWithClipRRect", wrapWithClipRRect),
    vscode.commands.registerCommand("extension.wrapWithHero", wrapWithHero),
    vscode.commands.registerCommand("extension.wrapWithGestureDetector", wrapWithGestureDetector),
    vscode.commands.registerCommand("extension.wrapWithInkWell", wrapWithInkWell),
    vscode.commands.registerCommand("extension.wrapWithSingleChildScrollView", wrapWithSingleChildScrollView),
    vscode.commands.registerCommand("extension.wrapWithSafeArea", wrapWithSafeArea),
    vscode.commands.registerCommand("extension.wrapWithForm", wrapWithForm),
    vscode.commands.registerCommand("extension.wrapWithObx", wrapWithObx),
    vscode.commands.registerCommand("extension.wrapWithObserver", wrapWithObserver),

    vscode.commands.registerCommand("extension.selectWidget", function () {
			expandSelection(true);
		}),

    vscode.languages.registerCodeActionsProvider(
      { pattern: "**/*.{dart,dartx}", scheme: "file" },
      new CodeActionProvider()
    )
  ];

  context.subscriptions.push(...disposable);
}

export function deactivate() {}
