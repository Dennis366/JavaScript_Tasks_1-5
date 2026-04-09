const str = "asuntokionapajaa";

let newString;

if (str.includes("paja")) {
  newString = str.slice(str.indexOf("paja"), str.indexOf("paja") + 4);
} else {
  newString = "String not found";
}

console.log("Origin string:", str);
console.log("New string:", newString);


let result = "";

for (let i = 0; i < str.length; i++) {
  if ((i + 1) % 3 === 0) {
    let char = str[i];

    if (char === "a") {
      char = "*";
    }

    result += char;
  }
}

result = result.toUpperCase();

console.log("Every 3 letter from", str, "=", result);