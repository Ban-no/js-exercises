// ハッシュ関数：文字列を数値に変換する
// ハッシュテーブルでは、"key" の文字列を配列のインデックスに変換する必要があるため、数値に変換する。
export function hash(key) {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h += key.charCodeAt(i); // 各文字の文字コードを合計して、簡易的に数値に変換
  }
  return h;
}

export function newHashTable(capacity) {
  return {
    size: 0, // マッピング数を示すプロパティ → 登録されている key-value ペアの数（登録・削除時に更新）
    entries: new Array(capacity), // マッピングを格納する固定長の配列 → 固定長の配列を作成して、ここにデータを入れる

    get(key) {
      // keyにマップされた値を取得する
      const index = hash(key) % capacity;
      let current = this.entries[index];
      while (current) {
        if (current.key === key) {
          return current.value;
        }
        current = current.next;
      }
      return undefined;
    },

    put(key, value) {
      // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
      const index = hash(key) % capacity;
      let current = this.entries[index];

      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        current = current.next;
      }

      const newEntry = { key, value, next: this.entries[index] };
      this.entries[index] = newEntry;
      this.size++;
    },

    remove(key) {
      // keyのマッピングを削除する
      const index = hash(key) % capacity;
      let current = this.entries[index];
      let prev = null;

      while (current) {
        if (current.key === key) {
          if (prev) {
            prev.next = current.next;
          } else {
            this.entries[index] = current.next;
          }
          this.size--;
          return;
        }
        prev = current;
        current = current.next;
      }
    },
  };
}
