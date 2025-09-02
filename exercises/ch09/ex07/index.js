// 連結リスト本体
export class LinkedList {
  #head = null;
  #tail = null;

  push(value) {
    const newNode = { value, next: null };
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
  }

  pushAll(...items) {
    items.forEach((item) => this.push(item));
  }

  toString() {
    let current = this.#head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return "[" + values.join(", ") + "]";
  }
}

/**
 * push回数を記録するラッパークラス
 * 継承ではなく「内部にLinkedListを持つ（合成）」ことで実現
 */
export class InstrumentedLinkedList {
  #list = new LinkedList(); // 内部に本物のリストを持つ
  #pushCount = 0;

  get pushCount() {
    return this.#pushCount;
  }

  push(item) {
    this.#list.push(item);
    this.#pushCount++;
  }

  pushAll(...items) {
    items.forEach((item) => this.push(item)); // push を通すことでcountが正しく加算される
  }

  toString() {
    return this.#list.toString();
  }
}
