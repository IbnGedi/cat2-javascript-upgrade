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
const wishlistInput = document.getElementById("wishlist-input");
const wishlistAddBtn = document.getElementById("wishlist-add-btn");
const wishlistItems = document.getElementById("wishlist-items");

wishlistAddBtn.addEventListener("click", function () {
  const itemText = wishlistInput.value.trim();

  if (itemText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = itemText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeBtn);
  wishlistItems.appendChild(li);

  wishlistInput.value = "";
});
const bookingForm = document.getElementById("booking-form");
const bookingFeedback = document.getElementById("booking-feedback");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = document.getElementById("booking-name").value.trim();
  const emailValue = document.getElementById("booking-email").value.trim();
  const messageValue = document.getElementById("booking-message").value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    bookingFeedback.textContent = "Please fill in all fields before submitting.";
    bookingFeedback.className = "feedback-error";
    return;
  }

  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    bookingFeedback.textContent = "Please enter a valid email address.";
    bookingFeedback.className = "feedback-error";
    return;
  }

  bookingFeedback.textContent = "Thanks, " + nameValue + "! Your inquiry has been received. We'll get back to you at " + emailValue + ".";
  bookingFeedback.className = "feedback-success";

  bookingForm.reset();
});