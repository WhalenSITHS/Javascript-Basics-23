x = Number(prompt("num"));
function test(x) {
  if (x > 7) {
    alert("bigger");
  } else if (x < 7 && x > 3) {
    alert("middle");
  } else {
    alert("else");
  }
}
test(x);
