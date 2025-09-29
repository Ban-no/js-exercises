function reverseBytes32(val) {
  return (
    (((val & 0xff) << 24) |
      ((val & 0xff00) << 8) |
      ((val >> 8) & 0xff00) |
      ((val >> 24) & 0xff)) >>>
    0
  ); // 符号なし整数に
}

function toBigEndian(uint32Arr) {
  return new Uint32Array(uint32Arr.map(reverseBytes32));
}

function toLittleEndian(uint32Arr) {
  return new Uint32Array(uint32Arr.map(reverseBytes32));
}

export { toBigEndian, toLittleEndian };
