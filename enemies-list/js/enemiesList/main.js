function main() {
  // Put your code here
  console.log("My Enemies List!")
  console.log("----------------")

  const enemies = [
    Enemy = {
      FirstName: "Joshua",
      LastName: "Flowers",
      Offenses: {
        1: "Being a jerk to me in elementary school",
        2: "Not being nice to me in elementary school"
      },
      IsReallyHated: true
    },
    Enemy = {
      FirstName: "Darth",
      LastName: "Vader",
      Offenses: {
        1: "Cut off Luke's hand",
        2: "Murdered all those kids",
        3: "Unkind management practices"
      },
      IsReallyHated: false
    },
    Enemy = {
      FirstName: "Betty",
      LastName: "Rudelady",
      Offenses: {
        1: "Phone calls in the theater",
        2: "Phone calls on the bus",
        3: "Phone calls in line at the grocery store",
        4: "Poor conversationalist"
      },
      IsReallyHated: true
    },
    Enemy = {
      FirstName: "Leon",
      LastName: "Peck",
      Offenses: {
        1: "Keeps giving me a hotplate"
      },
      IsReallyHated: false
    }
  ]

  enemies.forEach(enemy => {
    if (enemy.IsReallyHated === true) {
      console.log(enemy.FirstName + enemy.LastName + " Really, really dislike!")
    }
    else (console.log(enemy.FirstName + enemy.LastName))
  })
}

main();