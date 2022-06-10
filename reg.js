const text = "今日の夕食代：500円";
const regexp = /今日の夕食代：(?<digit>\d\d\d)円/dg;

for (const match of text.matchAll(regexp)) {
  console.dir(match);
}
