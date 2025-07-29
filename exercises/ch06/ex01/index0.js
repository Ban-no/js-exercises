// 文字列を数値に変換する簡単なハッシュ関数
function hash(key) {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h += key.charCodeAt(i);
  }
  return h;
}

// ハッシュテーブルを生成する関数
export function newHashTable(capacity) {
  return {
    size: 0, // 現在の登録されているデータ数
    entries: new Array(capacity), // 固定長の配列（中にマッピングを保存する）

    // 値を取得するメソッド
    get(key) {
      const index = hash(key) % capacity; // 配列のインデックスを計算
      let node = this.entries[index];

      // 連結リストをたどって、目的の key を探す
      while (node) {
        if (node.key === key) return node.value;
        node = node.next;
      }
      return undefined; // 見つからなかった場合
    },

    // 値を追加・更新するメソッド
    put(key, value) {
      const index = hash(key) % capacity;
      let node = this.entries[index];

      // すでに存在する key なら上書き
      while (node) {
        if (node.key === key) {
          node.value = value;
          return;
        }
        node = node.next;
      }

      // 新しいノードを追加（先頭に追加）
      this.entries[index] = {
        key,
        value,
        next: this.entries[index], // 既存の先頭に接続
      };
      this.size++;
    },

    // 値を削除するメソッド
    remove(key) {
      const index = hash(key) % capacity;
      let node = this.entries[index];
      let prev = null;

      while (node) {
        if (node.key === key) {
          if (prev) {
            prev.next = node.next;
          } else {
            this.entries[index] = node.next;
          }
          this.size--;
          return;
        }
        prev = node;
        node = node.next;
      }
    },
  };
}

// 動作確認サンプル
const hashTable = newHashTable(10);
hashTable.put("key1", "value1");
hashTable.put("key2", { value: "value2" });
console.log(`size=${hashTable.size}`); // size=2
console.log(`key1=${hashTable.get("key1")}`); // key1=value1
console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // key2={"value":"value2"}
hashTable.put("key2", "new value");
console.log(`key2=${hashTable.get("key2")}`); // key2=new value
hashTable.remove("key2");
console.log(`key2=${hashTable.get("key2")}`); // key2=undefined
console.log(`size=${hashTable.size}`); // size=1
