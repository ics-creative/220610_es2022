class MyCounter {
  #count;

  constructor(count) {
    this.#count = count;
  }

  #calc() {
    return this.#count * 10;
  }

  say() {
    // プライベート変数にアクセスできるのはクラスの内部だけ
    console.log(this.#calc());
  }
}

const object = new MyCounter(3);
object.say(); // 30

console.log(object.#count); // ❎️ シンタックスエラー
console.log(object.#calc()); // ❎️ シンタックスエラー
