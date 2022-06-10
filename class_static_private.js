class MyCounter {
  static #counter = 1;

  // 静的なプライベート関数
  static #getNextId() {
    return MyCounter.#counter++;
  }

  #id; // プライベート変数としてのID

  constructor() {
    // 内部的に管理したいIDには、静的変数を利用する
    this.#id = MyCounter.#getNextId();
  }

  getId () {
    return this.#id;
  }
}

// 利用例
const list = [new MyCounter(), new MyCounter()]
console.log(list[1].getId()); // 2
