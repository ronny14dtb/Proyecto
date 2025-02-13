import * as readline from 'readline';

const morseCode: { [key: string]: string } = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
  6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----", " ": "/"
};

const reverseMorseCode: { [key: string]: string } = Object.fromEntries(
  Object.entries(morseCode).map(([key, value]) => [value, key])
);

function isMorse(text: string): boolean {
  return /^[.\-/ ]+$/.test(text);
}

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((char) => morseCode[char] || "")
    .join(" ");
}

function morseToText(morse: string): string {
  return morse
    .split(" ")
    .map((code) => reverseMorseCode[code] || "")
    .join("");
}

function convertText(text: string): string {
  if (isMorse(text)) {
    return morseToText(text);
  } else {
    return textToMorse(text);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Escribe un texto o código Morse: ", (userInput: string) => {
  const result = convertText(userInput);
  console.log(`Resultado: ${result}`);
  rl.close();
});