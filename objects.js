const date = new Date();
const year = date.getFullYear();
/* const jane = {
  firstName: "Jane",
  lastName: "LaDooka",
  graduated: false,
  DOB: 2008,
  siblings: ["Katie", "Snake"],
  age: function () {
    return year - this.DOB;
  },
};
const chenZee = {
  firstName: "Chen-Zee",
  lastName: "HeHe",
  graduated: false,
  DOB: 2009,
  siblings: ["ChenYee", "ChenWee"],
  age: function () {
    return year - this.DOB;
  },
};

const dakota = {
  firstName: "JDakota",
  lastName: "Stabeelee",
  graduated: true,
  DOB: 2008,
  siblings: ["Blaire", "Not Blaire"],
  age: function () {
    return year - this.DOB;
  },
};
 */
const students = [
  {
    firstName: "Jane",
    lastName: "LaDooky",
    graduated: false,
    DOB: 2008,
    siblings: ["Katie", "Snake"],
    age: function () {
      return year - this.DOB;
    },
  },
  {
    firstName: "Chen-Zee",
    lastName: "HeHe",
    graduated: false,
    DOB: 2007,
    siblings: ["ChenYee", "ChenWee"],
    age: function () {
      return year - this.DOB;
    },
  },
  {
    firstName: "Dakota",
    lastName: "Stabeelee",
    graduated: true,
    DOB: 2008,
    siblings: ["Blaire", "Not Blaire"],
    age: function () {
      return year - this.DOB;
    },
  },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//index starts at 0
//console.log(numbers[numbers.length - 1]);
//foreach is a for loop
//arrow function ()=> auto returns output, this keyword points global
//numbers.forEach((number, index) => console.log(number, index));
//students.forEach((student) => console.log(student.firstName));
students.forEach((student) =>
  student.siblings.forEach((sib) => console.log(sib))
);

students
  .filter((student) => student.graduated)
  .forEach((el) => console.log(el.firstName));
