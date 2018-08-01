'use strict';
//creating a variable for tracking correct answers
var correctAnswer = 0;

//asking user for their name
var userName = prompt('Hello, what is your name?');
alert('Hi, ' + userName + '. Let\'s play a guessing game.');

//asking user series of 5 questions for guessing game
var questionDog = prompt('Do I have a dog?').toUpperCase();
if (questionDog === 'YES' || questionDog === 'Y') {
  alert('Yep, I do! His name is Pooka and he is the best dog in the entire world.');
  correctAnswer++;
  console.log(questionDog + '. The user was right');
}
else if (questionDog === 'NO' || questionDog === 'N') {
  alert('Incorrect, I do have a dog. His nickname is Mr. Ruffertons.');
  console.log(questionDog + '. The user was wrong, I do have a dog');
}
var questionState = prompt('Am I from Washington?').toUpperCase();
if (questionState === 'NO' || questionState === 'N') {
  alert('Correct, I moved to Washington from Colorado 10 years ago');
  correctAnswer++;
  console.log(questionState + '. The user was right');
}
else if (questionState === 'YES' || questionState === 'Y') {
  alert('Nope, I am from Colorado.');
  console.log(questionState + '. The user was wrong');
}

var questionVeg = prompt('Am I a vegetarian?').toUpperCase();
if (questionVeg === 'YES' || questionVeg === 'Y') {
  alert('That is correct.');
  correctAnswer++;
  console.log(questionVeg + '. The user is correct');
}
else if (questionVeg === 'NO' || questionVeg === 'N') {
  alert('Wrong, I have been a vegetarian since college');
  console.log(questionVeg + '. The user was wrong');
}

var questionSiblings = prompt('Do I have any siblings?').toUpperCase();
if (questionSiblings === 'NO' || questionSiblings === 'N') {
  alert('Incorrect.');
  console.log(questionSiblings + '. The user was wrong');
}
else if (questionSiblings === 'YES' || questionSiblings === 'Y') {
  alert('Correct, but how many?');
  correctAnswer++;
  console.log(questionSiblings + '. The user was right');
}

var guessesLeft = 4;
var timesThrough = 0;
while(guessesLeft >= 0) {
  console.log('Guesses left', guessesLeft, 'Times through', timesThrough++);
  if (guessesLeft === 0) {
    alert('Out of guesses, move to next question. The correct answer is 2.');
    break;
  }

  var siblingGuess = prompt('how many siblings do i have?');

  if (siblingGuess > 2) {
    guessesLeft --;
    alert('Too high, ' + guessesLeft + ' more guesses left.');
  }

  else if(siblingGuess < 2) {
    guessesLeft --;
    alert('Too low, ' + guessesLeft + ' more guesses left.');
  }

  else if(parseInt(siblingGuess) === 2) {
    alert('Correct!');
    correctAnswer++;
    console.log('The user guessed correctly. 2 siblings');
    break;
  }
  else {
    break;
  }
}

var questionColor = prompt('Do I have a favorite color?').toUpperCase();
if (questionColor === 'YES' || questionColor === 'Y') {
  alert('Yep, I have a couple!');
  correctAnswer++;
  console.log(questionColor + '. The user was right');
}
else if (questionColor === 'NO' || questionColor === 'N') {
  alert('Wrong, everyone has at least one favorite color.');
  console.log(questionColor + '. The user was wrong');
}

var favColors = ['purple', 'green', 'blue', 'teal'];
for ( var colorGuesses = 6; colorGuesses >0; colorGuesses--) {
  var favColorGuess = prompt('Guess one of my favorite colors');

  if (favColors.includes(favColorGuess)) {
    alert('Yes, that is one of my favorite colors');
    correctAnswer++;
    console.log(favColorGuess + '. The user guessed correctly');
    break;
  }

  else {
    alert('No, guess again.');
  }
}

alert('You got ' + correctAnswer + ' out of 7 answers correct. Thanks for playing!');
console.log(correctAnswer);