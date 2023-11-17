const raw = ["rad1", "rad2", "rad3", "rad4", "rad5"];
const size = ["1rem", "2rem", "3rem", "4rem", "5rem"];
const list = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

for (let i = 0; i < 5; i++) {
  const p = document.createElement("p");
  document.body.appendChild(p);
  p.innerText = raw[i];
  p.style.marginBottom = "spx";
  p.style.textAlign = "center";
  p.style.color = `hsl(240, 100%, 70%)`;
  p.style.fontSize = size[i];
  const hue = 120 + i * 25;
  p.style.backgroundColor = `hsl(${hue}, 80%, 80%)`;
}

const bigbox = document.createElement("div");
document.body.appendChild(bigbox);

bigbox.style.display = "flex";
bigbox.style.justifyContent = "space-evenly";
bigbox.style.border = "2px solid black";
bigbox.style.width = "915px";
bigbox.style.height = "900px";

const box = document.createElement("div");
bigbox.appendChild(box);

box.style.border = "10px solid skyblue";
box.style.width = "15%";
box.style.height = "180px";
bigbox.style.justifyContent = "center";
bigbox.style.alignItems = "center";
box.style.margin = "0 50px";

for (let i = 0; i < 10; i++) {
  const clara = document.createElement("p");
  box.appendChild(clara);
  clara.innerText = i;
  clara.style.margin = "0";

  //
  console.log(i, i % 2);

  if (i == 4) {
    clara.style.color = "white";
    clara.style.backgroundColor = "blue";
  } else if (i % 2 == 0) {
    clara.style.color = "white";
    clara.style.backgroundColor = "black";
  }
}

// box.innerText =

const box2 = document.createElement("div");
bigbox.appendChild(box2);

box2.style.border = "10px solid skyblue";
box2.style.width = "15%";
box2.style.height = "180px";
box2.style.margin = "0 50px";

for (let i = 9; i >= 0; i--) {
  const clara1 = document.createElement("p");
  box2.appendChild(clara1);
  clara1.innerText = i;
  clara1.style.margin = "0";
  console.log(i, i % 2);
  if (i % 2 == 0) {
    clara1.style.color = "white";
    clara1.style.backgroundColor = "black";
  }

  if (i == 8) {
    clara1.style.color = "white";
    clara1.style.background = "blue";
  }
}

const box3 = document.createElement("div");
bigbox.appendChild(box3);

box3.style.border = "10px solid skyblue";
box3.style.width = "15%";
box3.style.height = "180px";
box3.style.margin = "0 50px";

for (let i = 0; i < 10; i++) {
  const clara2 = document.createElement("div");
  box3.appendChild(clara2);
  clara2.innerText = list[i];
  console.log(i, i % 2);
  if (i % 2 == 0) {
    clara2.style.color = "white";
    clara2.style.backgroundColor = "black";
  }
  if (i == 5) {
    clara2.style.color = "sex";
    clara2.style.background = "blue";
  }
}
