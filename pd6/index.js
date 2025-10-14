function getCards() {
  const buttons = document.querySelectorAll("button");
  //not needed unless we want filter etc.
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      //console.log(event.target);
      console.log(
        event.target.closest(".display-card").getAttribute("data-id"),
        event.target.textContent
      );
    })
  );
}
getCards();
//make array
//put cards on screen with JS
//make a cart (HTML, JS)
//add to cart to button
