// 特殊文字をエスケープシーケンスに変換する2つの関数（if-else版とswitch版）

// if-else版
export function escapeStringIfElse(inputStr) {
  let escapedStr = ""; // エスケープされた文字列を作るための変数

  for (let i = 0; i < inputStr.length; i++) {
    const ch = inputStr[i];

    // 一文字ずつ特殊文字かどうか調べて変換
    if (ch === "\0") escapedStr += "\\0";
    else if (ch === "\b") escapedStr += "\\b";
    else if (ch === "\t") escapedStr += "\\t";
    else if (ch === "\n") escapedStr += "\\n";
    else if (ch === "\v") escapedStr += "\\v";
    else if (ch === "\f") escapedStr += "\\f";
    else if (ch === "\r") escapedStr += "\\r";
    else if (ch === '"') escapedStr += '\\"';
    else if (ch === "'") escapedStr += "\\'";
    else if (ch === "\\") escapedStr += "\\\\";
    else escapedStr += ch; // 特殊でなければそのまま
  }

  return escapedStr;
}

// switch版
export function escapeStringSwitch(inputStr) {
  let escapedStr = "";

  for (let i = 0; i < inputStr.length; i++) {
    const ch = inputStr[i];

    switch (ch) {
      case "\0":
        escapedStr += "\\0";
        break;
      case "\b":
        escapedStr += "\\b";
        break;
      case "\t":
        escapedStr += "\\t";
        break;
      case "\n":
        escapedStr += "\\n";
        break;
      case "\v":
        escapedStr += "\\v";
        break;
      case "\f":
        escapedStr += "\\f";
        break;
      case "\r":
        escapedStr += "\\r";
        break;
      case '"':
        escapedStr += '\\"';
        break;
      case "'":
        escapedStr += "\\'";
        break;
      case "\\":
        escapedStr += "\\\\";
        break;
      default:
        escapedStr += ch;
    }
  }

  return escapedStr;
}
