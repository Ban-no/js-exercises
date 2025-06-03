export function convertLfToCrlf(text) {
  //return text.replace(/(?<!\r)\n/g, "\r\n");
  return input.replace(/\n/g, "\r\n");
}

export function convertCrlfToLf(text) {
  return text.replace(/\r\n/g, "\n");
}

//LF（Line Feed）や CR+LF（Carriage Return + Line Feed）は、改行を表す特殊な文字
//OSがWindowsだと改行コードは、CR+LF (\r\n)。OSがLinux/macOSだと改行コードはLF (\n)。
