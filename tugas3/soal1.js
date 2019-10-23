let arrayObject = [
  {
    name: "Tatas",
    company: "Arkademy",
    job: "Trainer",
    status: "Single",
    city: "Jogja"
  },
  {
    name: "Pratama",
    company: "Emago",
    job: "Trainer",
    status: "Single",
    city: "Jakarta"
  }
];

function editArray() {
  let pushArray = [...arrayObject];
  pushArray.find(a => a.name == "Tatas").status = "Married";
  pushArray.find(a => a.name == "Tatas").city = "Jakarta";
  // for (var i = 0; i < arrayObject.length; i++) {
  //   if (pushArray[i].name === "Pratama") {
  //     pushArray[i].company = "Arkademy";
  //     pushArray[i].city = "Yogyakarta";
  //   }
  // }

  pushArray.find(a => a.name == "Pratama").company = "Arkademy";
  pushArray.find(a => a.name == "Pratama").city = "Jogyakarta";
  return pushArray;
}
console.log(editArray());
