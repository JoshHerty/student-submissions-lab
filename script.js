"use strict";
// submissions is an array of objects

// 1.
const submissions = [
  {
    name: "Jane", // string
    score: 95, // number
    date: "2020-01-24", // string
    passed: true, // boolean
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(studentInfo);
};

// not interested in addSumbission's return value
// ...so I don't call it in a console log
addSubmission(submissions, "James", 100, "2022-05-10");
// addSubmission(submissions, "Andrea", 20, "2022-05-10");
// check work: (data that was modified)
// console.log(submissions);

// 3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 4);

// console.log(submissions);

// 4.
const deleteSubmissionByName = (array, name) => {
  const foundIndex = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (foundIndex !== -1) {
    array.splice(name, 1);
    console.log(`${name} was removed from submissions`);
  } else {
    console.log(`${name} was not found`);
  }
};

deleteSubmissionByName(submissions, "Johnson");

// 5. REVIEW
const editSubmissions = (array, index, score) => {
  let newScore = (array[index].score = score);
  newScore >= 60 ? (array[index].passed = true) : (array[index].passed = false);
};
editSubmissions(submissions, 2, 53);
// console.log(submissions);

// 6.
const findSubmissionByName = (array, name) => {
  const foundName = array.find((submission) => {
    return submission.name <= name;
  });
  if (foundName) {
    return foundName;
  } else {
    return `${name}`;
  }
};

console.log(findSubmissionByName(submissions, "Jane"));

// 7. not working
// Declare function named findLowestScore
// Parameter(s): array
/* Functionality: return the object in the array that has the lowest score. 
   Use the forEach method to loop through the whole array. */
const findLowestScore = (array) => {
  const lowestScore = array.forEach((item) => {
    Math.min(item.score);
  });
  return lowestScore;
};

console.log(findLowestScore(submissions));

// 8.
// let sum = 0;
// const findAverageScore = (array) => {
//   for (const item of array.score) {
//     return (sum += item);
//   }
// };
// console.log(findAverageScore(submissions));

// 9.
