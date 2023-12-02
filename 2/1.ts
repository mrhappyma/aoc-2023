const input = await Bun.file(import.meta.dir + "/input").text();

const lines = input.split("\n");
let value = 0;

const totals: { [key: string]: number } = {
  red: 12,
  green: 13,
  blue: 14,
};

let game = 0;
for (const line of lines) {
  game++;
  let possible = true;
  const ss = line.split(":")[1].split(";");
  for (let s of ss) {
    s = s.trim();
    const shs = s.split(",");
    for (let sh of shs) {
      sh = sh.trim();
      const [num, color] = sh.split(" ");
      if (parseInt(num) > totals[color]) possible = false;
    }
  }
  if (possible) value += game;
}

console.log(value);
