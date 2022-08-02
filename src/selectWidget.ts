import { bracketUtil } from './bracketUtil';
import * as history from './selectionHistory';

import * as vscode from 'vscode';

class SearchResult {
  bracket: string;
  offset: number;

  constructor(bracket: string, offset: number) {
    this.bracket = bracket;
    this.offset = offset;
  }
}

function findBackward(text: string, index: number): SearchResult {
  const bracketStack: string[] = [];
  let insideAngleBracket = false;
  for (let i = index; i >= 0; i--) {
    const char = text.charAt(i);
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
        const top = bracketStack.pop();
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
    const char = text.charAt(i);
    if (bracketUtil.isCloseBracket(char)) {
      if (bracketStack.length == 0) {
        return new SearchResult(char, i);
      } else {
        const top = bracketStack.pop();
        if (!bracketUtil.isMatch(top!, char)) {
          throw 'Unmatched bracket pair';
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
  const selectionStart = editor!.document.offsetAt(selection.start);
  const selectionEnd = editor!.document.offsetAt(selection.end);

  return {
    backwardStarter: selectionStart - 1, //coverage vscode selection index to text index
    forwardStarter: selectionEnd,
    text: editor!.document.getText(),
  };
}

function toVscodeSelection({
  start,
  end,
}: {
  start: number;
  end: number;
}): vscode.Selection {
  const editor = vscode.window.activeTextEditor;
  return new vscode.Selection(
    editor!.document.positionAt(start + 1), //convert text index to vs selection index
    editor!.document.positionAt(end)
  );
}

function isMatch(r1: SearchResult, r2: SearchResult) {
  return r1 != null && r2 != null && bracketUtil.isMatch(r1.bracket, r2.bracket);
}

export function expandSelection(includeBracket: boolean) {
  const editor = vscode.window.activeTextEditor;
  const originSelections = editor!.selections;

  const selections = originSelections.map(originSelection => {
    const newSelect = selectText(includeBracket, originSelection);
    return newSelect ? toVscodeSelection(newSelect) : originSelection;
  });

  const haveChange = selections.findIndex((s, i) => !s.isEqual(originSelections[i])) >= 0;
  if (haveChange) {
    history.changeSelections(selections);
  }
}

function selectText(
  includeBracket: boolean,
  selection: vscode.Selection
): { start: number; end: number } | void {
  const searchContext = getSearchContext(selection);
  const { text, backwardStarter, forwardStarter } = searchContext;
  if (backwardStarter < 0 || forwardStarter >= text.length) {
    return;
  }

  let selectionStart: number, selectionEnd: number;
  let backwardResult = findBackward(searchContext.text, searchContext.backwardStarter);
  let forwardResult = findForward(searchContext.text, searchContext.forwardStarter);

  while (forwardResult != null && !isMatch(backwardResult, forwardResult)) {
    forwardResult = findForward(searchContext.text, forwardResult.offset + 1);
  }

  while (backwardResult != null && !isMatch(backwardResult, forwardResult)) {
    backwardResult = findBackward(searchContext.text, backwardResult.offset - 1);
  }

  if (!isMatch(backwardResult, forwardResult)) {
    showInfo('No matched bracket pairs found');
    return;
  }
  // we are next to a bracket
  // this is the case for double press select
  if (
    backwardStarter == backwardResult.offset &&
    forwardResult.offset == forwardStarter
  ) {
    selectionStart = backwardStarter - 1;
    selectionEnd = forwardStarter + 1;
  } else {
    if (includeBracket) {
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
  };
}
