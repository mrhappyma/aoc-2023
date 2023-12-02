// (wrong oops)
const input = await Bun.file(import.meta.dir + "/input").text();

const lines = input.split("\n");
let value = 0;

for (const line of lines) {
  const digits: number[] = [];
  const text = {
    1: 1,
    one: 1,
    2: 2,
    two: 2,
    3: 3,
    three: 3,
    4: 4,
    four: 4,
    5: 5,
    five: 5,
    6: 6,
    six: 6,
    7: 7,
    seven: 7,
    8: 8,
    eight: 8,
    9: 9,
    nine: 9,
  };
  const addRemainingDigits = (i: string) => {
    let winningIndex = 1000;
    let winningKey = "";
    let winningValue = 0;
    for (const [k, v] of Object.entries(text)) {
      const s = i.indexOf(k);
      if (winningIndex > s && s >= 0) {
        winningIndex = s;
        winningKey = k;
        winningValue = v;
      }
    }
    if (winningIndex == 1000) return;
    digits.push(winningValue);
    addRemainingDigits(i.replace(winningKey, ""));
  };
  addRemainingDigits(line);
  const code = parseInt(`${digits[0]}${digits[digits.length - 1]}`);
  console.log(code, digits, line);
  value += code;
}

console.log(value);
