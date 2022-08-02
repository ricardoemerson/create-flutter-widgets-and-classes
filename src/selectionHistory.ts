import * as vscode from 'vscode';

let selectionHistory: Array<vscode.Selection[]> = [];
vscode.window.onDidChangeActiveTextEditor(() => {
  selectionHistory = [];
});

function selectionLength(editor: vscode.TextEditor, selection: vscode.Selection): number {
  return (
    editor.document.offsetAt(selection.end) - editor.document.offsetAt(selection.start)
  );
}

export function changeSelections(selections: vscode.Selection[]) {
  const editor = vscode.window.activeTextEditor;
  if (selectionHistory.length > 0) {
    //if we can tell that it's a new round of commands, so that will clean the history
    const lasSelections = selectionHistory[selectionHistory.length - 1];
    if (
      lasSelections.length !== selections.length ||
      // if there is some selection in the new selections that length is smaller than the correspond selection in the history
      lasSelections.findIndex(
        (s, i) => selectionLength(editor!, s) > selectionLength(editor!, selections[i])
      ) >= 0
    ) {
      selectionHistory = [];
    }
  }

  const originSelections = editor!.selections;
  selectionHistory.push(originSelections);
  editor!.selections = selections;
}

export function unDoSelect() {
  const editor = vscode.window.activeTextEditor;
  const lasSelections = selectionHistory.pop();
  if (lasSelections) {
    editor!.selections = lasSelections;
  }
}
