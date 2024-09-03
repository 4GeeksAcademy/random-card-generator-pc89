import "./style.css";

window.onload = function() {
  function generateRandomCard() {
    const suits = ["spade", "club", "heart", "diamond"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    const symbols = {
      spade: "♠",
      club: "♣",
      heart: "♥",
      diamond: "♦"
    };

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSymbol = symbols[randomSuit];

    const cardElement = document.getElementById("card");
    cardElement.className = `card ${randomSuit}`;
    cardElement.setAttribute("data-symbol", randomSymbol);

    cardElement.innerHTML = `<span class="value">${randomValue}</span>`;

    const width = document.getElementById("cardWidth").value || 150;
    const height = document.getElementById("cardHeight").value || 225;
    cardElement.style.width = `${width}px`;
    cardElement.style.height = `${height}px`;
  }

  setInterval(generateRandomCard, 10000);

  const newCardBtn = document.getElementById("newCardBtn");

  if (newCardBtn) {
    newCardBtn.addEventListener("click", generateRandomCard);
  }

  generateRandomCard();
};
