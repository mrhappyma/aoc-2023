const input = await Bun.file(import.meta.dir + "/input").text();

const lines = input.split("\n");
let value = 0;

for (const line of lines) {
  const characters = line.split("");
  const digits = [];
  for (const c of characters) {
    const d = parseInt(c);
    if (d) digits.push(d);
  }
  value += parseInt(`${digits[0]}${digits[digits.length - 1]}`);
}

console.log(value);
