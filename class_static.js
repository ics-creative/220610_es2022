// 従来の書き方
class MyOldClass {
  // ...
}

MyOldClass.message = "あ"; // 動的に追加することで静的変数を表現できた

// 新しい書き方
class MyClass {
  static message = "い";
  // ...
}

console.log(MyOldClass.message); // "あ"
console.log(MyClass.message); // "い"
