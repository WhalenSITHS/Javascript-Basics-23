function goOut(raining, umbrella) {
  if (raining == "No") {
    alert("You went out");
  } else if (raining == "Yes" && umbrella == "Yes") {
    alert("you went out");
  } else if (raining == "Yes" && umbrella == "No") {
    alert("You stayed inside");
  } else {
    alert("something went wrong");
  }
}
raining = prompt("Raining?");
umbrella = prompt("umbrella?");
goOut(raining, umbrella);
