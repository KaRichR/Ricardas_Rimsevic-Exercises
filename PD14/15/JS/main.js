let s1 = 222;
let s2 = 245;

for (let ticket = s1; ticket <= s2; ticket++) {
  if (ticket % 3 === 0) {
    let digits = ticket.toString();
    if (digits.includes('3') || digits.includes('6') || digits.includes('9')) {
      console.log(ticket);
    }
  }
}
