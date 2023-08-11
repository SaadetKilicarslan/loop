//Challange 1

/*for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}*/

//Challange 2

/*let numbers = ["1", "2", "3", "4", "5", "6","7","8", "9", "10"]
let updatedArray = []
for (let i = 0; i < numbers.length; i++) {
  updatedArray.push(numbers[i] * 5)
  }
console.log(updatedArray);*/

//Challange 3

/*let list = ["cat", "window", "bottle", "car", "JavaScript"];
console.log(list);
for (let i = 0; i < 5; i++) {
  if (list[i].length > 4) {
    console.log(list[i] + "---> " + "long word");
  } else {
    console.log(list[i]);
  }
}*/

// Chalange 4 is not working.
for (let i = 1; i <= 5; i++) {
  const paragraph = document.getElementById("myParagraph");

  paragraph.textContent += i + " ";
}

//Chalange 5
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) console.log(i);
}
