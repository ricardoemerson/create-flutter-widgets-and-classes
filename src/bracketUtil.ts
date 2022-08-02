/* eslint-disable @typescript-eslint/no-namespace */
'use strict';

export namespace bracketUtil {
  const bracketParis = [['(', ')']];

  export function isMatch(open: string, close: string): boolean {
    return bracketParis.findIndex(p => p[0] === open && p[1] === close) >= 0;
  }

  export function isOpenBracket(char: string): boolean {
    return bracketParis.findIndex(pair => pair[0] === char) >= 0;
  }

  export function isCloseBracket(char: string): boolean {
    return bracketParis.findIndex(pair => pair[1] === char) >= 0;
  }

  export function isLetter(char: string) {
    return char.length === 1 && char.match(/[a-z.]/i);
  }
}
