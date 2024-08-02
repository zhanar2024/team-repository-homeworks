function pluralize(num, word) {
  let plural;
  if (num === 1) {
    console.log("There is only one " + word);
  } else if (num >= 2 && word.endsWith("y") && !word.endsWith("oy")) {
    plural = word.slice(0, -1) + "ies";
    console.log(num + " " + plural);
  } else if (num >= 2) {
    plural = word + "s";
    console.log(num + " " + plural);
  } else {
    console.log("There are no words to pluralize!");
  }
}

pluralize(2, "girl");
pluralize(1, "boy");
pluralize(0, "pencil");
pluralize(23, "sky");
pluralize(2, "pinky");
pluralize(7, "toy");
pluralize(4, "lily");
