'use strict';
//asking user for their name
var userName = prompt('Hello, what is your name?');
alert('Hi, ' + userName + '. Let\'s play a guessing game.');

//asking user series of 5 questions
var question1 = prompt('Do I have a dog?').toUpperCase();
if (question1 === 'YES' || question1 === 'Y') {
  alert('Yep, I do! His name is Pooka and he is the best dog in the entire world.');
  console.log(question1 + '. The user was right, I do have a dog');
}
else if (question1 === 'NO' || question1 === 'N') {
  alert('Incorrect, I do have a dog. His nickname is Mr. Ruffertons.');
  console.log(question1 + '. The user was wrong, I do have a dog');
}
var question2 = prompt('Am I from Washington?').toUpperCase();
if (question2 === 'NO' || question2 === 'N') {
  alert('Correct, I moved to Washington from Colorado 10 years ago');
  console.log(question2 + '. The user was right');
}
else if (question2 === 'YES' || question2 === 'Y') {
  alert('Nope, I am from Colorado.');
  console.log(question2 + '. The user was wrong');
}

var question3 = prompt('Am I a vegetarian?').toUpperCase();
if (question3 === 'YES' || question3 === 'Y') {
  alert('That is correct.');
  console.log(question3 + '. The user is correct');
}
else if (question3 === 'NO' || question3 === 'N') {
  alert('Wrong, I have been a vegetarian since college');
  console.log(question3 + '. The user was wrong');
}

var question4 = prompt('Do I have a favorite color?').toUpperCase();
if (question4 === 'YES' || question4 === 'Y') {
  alert('Yep! My favorite color is green.');
  console.log(question4 + '. The user was right');
}
else if (question4 === 'NO' || question4 === 'N') {
  alert('Wrong, my favorite color is green.');
  console.log(question4 + '. The user was wrong');
}

var question5 = prompt('Do you want to keep playing?').toUpperCase();
if (question5 === 'NO' || question5 === 'N') {
  alert('Good, I am all out of questions.');
  console.log(question5 + '. The user was wrong');
}
else if (question5 === 'YES' || question5 === 'Y') {
  alert('Too bad. I am all out of questions');
  console.log(question5 + '. The user was right');
}
