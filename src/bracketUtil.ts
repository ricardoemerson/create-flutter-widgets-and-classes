'use strict';

export namespace bracketUtil {
  let bracketParis = [
    ["(", ")"],
  ]


  export function isMatch(open: string, close: string): Boolean {
    return bracketParis.findIndex(p => p[0] === open && p[1] === close) >= 0;
  }

  export function isOpenBracket(char: string): Boolean {
    return bracketParis.findIndex(pair => pair[0] === char) >= 0;
  }

  export function isCloseBracket(char: string): Boolean {
    return bracketParis.findIndex(pair => pair[1] === char) >= 0;
  }

  export function isLetter(char: String) {
    return char.length === 1 && char.match(/[a-z.]/i);
  }

}