var submitBtn = document.getElementById("submit");
var cardContainer = document.querySelector(".card-container");
var cardContainerTwo = document.querySelector(".card-container-two");
var ratings = document.querySelectorAll(".rate");
var score = document.querySelector(".score");

var rating_number = 0;

submitBtn.addEventListener("click", onSubmit);

function onSubmit() {
  if (rating_number != 0) {
    cardContainer.classList.add("hide");
    cardContainerTwo.classList.remove("hide");
    score.textContent = rating_number;
  }
}

ratings.forEach((rating) => {
  rating.addEventListener("click", handleClick);
});

function handleClick(e) {
  ratings.forEach((rate) => {
    rate.classList.remove("active");
  });

  if (e.target.classList.contains("rate")) {
    e.target.classList.add("active");
    rating_number = e.target.firstChild.innerText;
  } else {
    e.target.parentElement.classList.add("active");
    rating_number = e.target.innerText;
  }
  console.log(rating_number);
}
