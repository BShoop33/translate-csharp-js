function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!")
  console.log("---------------------------")

  const Roll = () => {
    dieValue = Math.floor(Math.random() * 5) + 1;
    let die = dieValue;
    return die;
  }

  for (i = 0; i < 10; i++) {

    die1 = Roll();
    die2 = Roll();

    let message = `${die1} + ${die2} == ${die1 + die2} `
    if (die1 === die2) {
      message += " DOUBLES!";
    }

    console.log(message)

  }

}

main();