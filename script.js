var cards = document.querySelectorAll(".card")
var card1 = document.getElementById("card-1");
var card2 = document.getElementById("card-2");
var card3 = document.getElementById("card-3");
var card4 = document.getElementById("card-4");
var card5 = document.getElementById("card-5");

function removeClass(){
    cards.forEach(card => {
        card.classList.remove("card--active")
    });
}


card1.addEventListener("click", function (e) {
  if (card1.classList.contains("card--active")) {
    card1.classList.remove("card--active");
  }  else {
    removeClass()
    card1.classList.add("card--active");
  }
});

card2.addEventListener("click", function (e) {
  if (card2.classList.contains("card--active")) {
    card2.classList.remove("card--active");
  } else {
    removeClass()
    card2.classList.add("card--active");
  }
});

card3.addEventListener("click", function (e) {
  if (card3.classList.contains("card--active")) {
    card3.classList.remove("card--active");
  } else {
    removeClass()
    card3.classList.add("card--active");
  }
});

card4.addEventListener("click", function (e) {
  if (card4.classList.contains("card--active")) {
    card4.classList.remove("card--active");
  }  else {
    removeClass()
    card4.classList.add("card--active");
  }
});

card5.addEventListener("click", function (e) {
  if (card5.classList.contains("card--active")) {
    card5.classList.remove("card--active");
  } else {
    removeClass()
    card5.classList.add("card--active");
  }
});
