const packages = [
  { name: "F1 Simulator - Single Session", price: "KSh 1,500" },
  { name: "F1 Simulator - 3 Session Pack", price: "KSh 4,000" },
  { name: "Go-Kart Racing - Single Lap Session", price: "KSh 2,000" },
  { name: "Go-Kart Racing - Group Package (4 people)", price: "KSh 7,000" },
  { name: "Full Experience Combo (F1 + Go-Kart)", price: "KSh 3,000" }
];

const packagesList = document.getElementById("packages-list");

packages.forEach(function (pkg) {
  const card = document.createElement("div");
  card.className = "package-card";

  const nameEl = document.createElement("h3");
  nameEl.textContent = pkg.name;

  const priceEl = document.createElement("p");
  priceEl.textContent = pkg.price;

  card.appendChild(nameEl);
  card.appendChild(priceEl);

  packagesList.appendChild(card);
});