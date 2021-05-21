var person1 = {
  name: "John Doe",
  gender: "M",
  weight: 85,
  height: 1.90,
}
var person2 = {
  name: "Mary Anne",
  gender: "F",
  weight: 66,
  height: 1.62,
}

var personList = [
  person1,
  person2,
];

for (var i = 0; i < personList.length; i++) {
  var personCurrent = personList[i];
  var bmi = personCurrent.weight / (personCurrent.height * personCurrent.height);

  var bmiString;
  if (bmi < 18.5) {
    bmiString = "underweight"
  } else if (bmi < 25) {
    bmiString = "normal weight"
  } else if (bmi < 30) {
    bmiString = "overweight"
  } else {
    bmiString = "obese"
  }

  console.log(
    "Name: ", personCurrent.name,
    " | BMI:", Math.round(bmi),
    " | ", bmiString
  )
}



