let fname = "Victoria";

/* for (let i = 0; i < fname.length; i++) {
  console.log(fname);
  console.log(fname[i]);
  console.log(fname.slice(-1));
}
function needle(fname, search) {
  if (fname.includes(search)) {
    return true;
  } else {
    return false;
  }
}

console.log(needle(fname, "Vic"));
 */

function sortString(fname) {
  let x = [...fname].sort();
  console.log(x);
}
sortString(fname);
