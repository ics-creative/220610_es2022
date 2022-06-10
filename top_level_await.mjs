const data = await fetch("https://ics-creative.github.io/220610_es2022/example/data.json");
const object = await data.json();
console.log(object);
