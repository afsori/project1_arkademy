// [
//   {
//     name: "Tatas",
//     company: "arkademy",
//     job: "trainer",
//     status: "single",
//     city: "jogya"
//   },
//   {
//     name: "pratama",
//     company: "emao",
//     job: "trainer",
//     status: "single",
//     city: "jakarta"
//   }
// ];

const people = {
  name: "Tatas",
  company: "arkademy",
  job: "trainer",
  status: "single",
  city: "jogya"
};
const newPeople = people;
newPeople.status = "married";
newPeople.city = "jakarta";

console.log(newPeople);
console.log(people);

const pratam = {
  name: "pratama",
  company: "emago",
  job: "trainer",
  status: "single",
  city: "jakarta"
};
const newPeople = people;
newPeople.status = "married";
newPeople.city = "jakarta";

console.log(newPeople);
console.log(people);
