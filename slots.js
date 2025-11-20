/* function slots(q, m1, m2, m3) {
  let plays = 0;
  let currentMachine = 1;
  while (q > 0) {
    q--;
    if (currentMachine === 1) {
      if (m1 % 35 === 0) {
        q += 30;
      }
      m1++;
      plays++;
    }

    currentMachine++;
    if (currentMachine > 3) {
      currentMachine = 1;
    }
  }
}
 */

/* take(23, [
  "TAKE",
  "TAKE",
  "SERVE",
  "SERVE",
  "CLOSE",
  "TAKE",
  "TAKE",
  "TAKE",
  "SERVE",
  "CLOSE",
  "EOF",
]);
 */
