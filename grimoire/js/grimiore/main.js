function main() {
  // Put your code here
  console.log("Do you believe in magic?")
  console.log("------------------------")

  const allSpells = [
    Spell = {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyReqired: 5.1
    },
    Spell = {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyReqired: 2.99
    },
    Spell = {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyReqired: 12.2
    },
    Spell = {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyReqired: 100.0
    },
    Spell = {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyReqired: 2921.5
    }
  ]

  const goodSpells = allSpells.filter(function (spell) {
    return spell.IsEvil === false;
  })

  const evilSpells = allSpells.filter(function (spell) {
    return spell.IsEvil === true;
  })

  console.log("Good Book")
  goodSpells.map(spellObject => console.log(spellObject.Name))
  console.log("")
  console.log("Evil Book")
  evilSpells.map(spellObject => console.log(spellObject.Name))
}

main();