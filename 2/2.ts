const input = await Bun.file(import.meta.dir + "/input").text();

const lines = input.split("\n");
let value = 0;

for (const line of lines) {
  const ss = line.split(":")[1].split(";");
  let nr = 0;
  let ng = 0;
  let nb = 0;
  for (let s of ss) {
    s = s.trim();
    const shs = s.split(",");
    for (let sh of shs) {
      sh = sh.trim();
      const [num, color] = sh.split(" ");
      if (color == "red" && nr < parseInt(num)) nr = parseInt(num);
      if (color == "green" && ng < parseInt(num)) ng = parseInt(num);
      if (color == "blue" && nb < parseInt(num)) nb = parseInt(num);
    }
  }
  const power = nr * ng * nb;
  value += power;
}

console.log(value);
