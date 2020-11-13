function main() {
  // Put your code here
  const List = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];

  const logPlaces = (place) => {
    console.log(place)
  };

  List.forEach(logPlaces);

  console.log("")
  console.log("'The' Place Names")

  const ThePlaces = List.filter(function (thePlaces) {
    return thePlaces.startsWith("The")

  });

  ThePlaces.map(x => console.log(x))
}

main();