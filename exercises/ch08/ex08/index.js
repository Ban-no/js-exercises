export function counterGroup() {
  // counterGroup 内の全 counter を管理する配列
  const counters = [];

  // 新しいカウンターを作成
  function newCounter() {
    let n = 0; // カウンターの初期値
    const counter = {
      count() {
        return n++;
      },
      reset() {
        n = 0;
      },
      // 内部値を取得するヘルパー（集計用）
      _getValue() {
        return n;
      },
    };
    counters.push(counter); // グループに登録
    return counter;
  }

  // グループ内の合計
  function total() {
    return counters.reduce((sum, c) => sum + c._getValue(), 0);
  }

  // グループ内の平均
  function average() {
    if (counters.length === 0)
      throw new TypeError("No counters to calculate average");
    return total() / counters.length;
  }

  // グループ内の分散
  function variance() {
    if (counters.length < 2)
      throw new TypeError("At least 2 counters required to calculate variance");
    const avg = average();
    const sumSquares = counters.reduce((sum, c) => {
      const diff = c._getValue() - avg;
      return sum + diff * diff;
    }, 0);
    return sumSquares / counters.length;
  }

  return {
    newCounter,
    total,
    average,
    variance,
  };
}
