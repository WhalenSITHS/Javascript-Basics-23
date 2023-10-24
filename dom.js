const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".first-name"),
  h2s: document.querySelectorAll("h2"),
  //select the textbox
  //select ALL the h2s in one property
};
function makeAlbum() {
  //const Album = blah blah blah {}
  //return Album
}
function addCard(Album) {
  document
    .querySelector(".gallery")
    .insertAdjacentHTML(
      "afterbegin",
      `<div class="card"><div class="card-title">${Album.name}</div></div>`
    );
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  //const Album = makeAlbum()
  //addCard(Album)
  //clearFields()
  //addRemoveButtons
});
