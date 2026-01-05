async function getData() {
  try {
    const response = await fetch("https://api.magicthegathering.io/v1/cards");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      data.cards.forEach((card) => console.log(card));
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
