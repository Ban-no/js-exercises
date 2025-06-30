// 加算：2つの複素数を足す関数
export function add(z1, z2) {
  return {
    // 実部は z1.real + z2.real
    real: z1.real + z2.real,
    // 虚部は z1.imag + z2.imag
    imag: z1.imag + z2.imag,
  };
}

// 減算：2つの複素数を引く関数
export function sub(z1, z2) {
  return {
    real: z1.real - z2.real,
    imag: z1.imag - z2.imag,
  };
}

// 乗算：複素数の掛け算
// (a + bi)(c + di) = (ac - bd) + (ad + bc)i
export function mul(z1, z2) {
  return {
    real: z1.real * z2.real - z1.imag * z2.imag,
    imag: z1.real * z2.imag + z1.imag * z2.real,
  };
}

// 除算：複素数の割り算
// (a + bi) / (c + di) = ((ac + bd) + (bc - ad)i) / (c² + d²)
export function div(z1, z2) {
  const denominator = z2.real ** 2 + z2.imag ** 2;
  return {
    real: (z1.real * z2.real + z1.imag * z2.imag) / denominator,
    imag: (z1.imag * z2.real - z1.real * z2.imag) / denominator,
  };
}
