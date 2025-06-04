// LF（\n）を CR+LF（\r\n）に変換
export function lfToCrlf(text) {
  return text.replace(/\n/g, "\r\n");
}

// CR+LF（\r\n）を LF（\n）に変換
export function crlfToLf(text) {
  return text.replace(/\r\n/g, "\n");
}
