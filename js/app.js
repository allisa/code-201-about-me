'use strict';
//asking user for their name
var userName = prompt('Hello, what is your name?');
alert('Hi, ' + userName + '. Let\'s play a guessing game.');

//asking user series of 5 questions
var questionDog = prompt('Do I have a dog?').toUpperCase();
if (questionDog === 'YES' || questionDog === 'Y') {
  alert('Yep, I do! His name is Pooka and he is the best dog in the entire world.');
  console.log(questionDog + '. The user was right, I do have a dog');
}
else if (questionDog === 'NO' || questionDog === 'N') {
  alert('Incorrect, I do have a dog. His nickname is Mr. Ruffertons.');
  console.log(questionDog + '. The user was wrong, I do have a dog');
}
var questionState = prompt('Am I from Washington?').toUpperCase();
if (questionState === 'NO' || questionState === 'N') {
  alert('Correct, I moved to Washington from Colorado 10 years ago');
  console.log(questionState + '. The user was right');
}
else if (questionState === 'YES' || questionState === 'Y') {
  alert('Nope, I am from Colorado.');
  console.log(questionState + '. The user was wrong');
}

var questionVeg = prompt('Am I a vegetarian?').toUpperCase();
if (questionVeg === 'YES' || questionVeg === 'Y') {
  alert('That is correct.');
  console.log(questionVeg + '. The user is correct');
}
else if (questionVeg === 'NO' || questionVeg === 'N') {
  alert('Wrong, I have been a vegetarian since college');
  console.log(questionVeg + '. The user was wrong');
}

var questionColor = prompt('Do I have a favorite color?').toUpperCase();
if (questionColor === 'YES' || questionColor === 'Y') {
  alert('Yep! My favorite color is green.');
  console.log(questionColor + '. The user was right');
}
else if (questionColor === 'NO' || questionColor === 'N') {
  alert('Wrong, my favorite color is green.');
  console.log(questionColor + '. The user was wrong');
}

var keepPlaying = prompt('Do you want to keep playing?').toUpperCase();
if (keepPlaying === 'NO' || keepPlaying === 'N') {
  alert('Good, I am all out of questions.');
  console.log(keepPlaying + '. The user was wrong');
}
else if (keepPlaying === 'YES' || keepPlaying === 'Y') {
  alert('Too bad. I am all out of questions');
  console.log(keepPlaying + '. The user was right');
}
