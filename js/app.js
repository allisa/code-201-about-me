'use strict';

//creating a variable to track correct answers
var correctAnswer = 0;

//asking user for their name
var userName = prompt('Hello, what is your name?');
alert('Hi, ' + userName + '. Let\'s play a guessing game.');

var quizQuestions = ['Do I have a dog?', 'Am I from Washington?', 'Am I a vegetarian?', 'Do I have any siblings?', 'Do I have a favorite color?'];
var correctResponse = ['Yep, I do! His name is Pooka and he is the best dog in the entire world.', 'Correct, I moved to Washington from Colorado 10 years ago', 'That is correct.', 'Correct, but how many?', 'Yep, I have a couple!'];

var incorrectResponse = ['Incorrect, I do have a dog. His nickname is Mr. Ruffertons.', 'Nope, I am from Colorado.', 'Wrong, I have been a vegetarian since college', 'Incorrect. Don\'t worry, I\'ll let you guess how many I siblings I have.', 'Wrong, everyone has at least one favorite color.'];

var answers = ['Y', 'N', 'Y', 'Y', 'Y'];

function yesNoQuestion(x) {
  for (var i = x; i < quizQuestions.length; i++){
    var questionAnswer = prompt(quizQuestions[i]).toUpperCase()[0];
    if (questionAnswer === answers[i]) {
      alert(correctResponse[i]);
      correctAnswer++;
      console.log(questionAnswer + '. The user was right.');
    } else if (questionAnswer !== answers[i]) {
      alert(incorrectResponse[i]);
      console.log(questionAnswer + '. The user was wrong');
    }
    if (i === 3) {
      return;
    }
  }
}

yesNoQuestion(0);


var guessesLeft = 4;
var timesThrough = 0;
while(guessesLeft >= 0) {
  console.log('Guesses left', guessesLeft, 'Times through', timesThrough++);
  if (guessesLeft === 0) {
    alert('Out of guesses, move to next question. The correct answer is 2.');
    break;
  }

  var siblingGuess = prompt('How many siblings do I have?');

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

console.log(correctAnswer);
yesNoQuestion(4);

var favColors = ['purple', 'green', 'blue', 'teal', 'gray'];
for ( var colorGuesses = 6; colorGuesses >0; colorGuesses--) {
  var favColorGuess = prompt('Guess one of my favorite colors');

  if (colorGuesses === 0) {
    alert(' You are out of guesses. My favorite colors are: purple, green, blue, teal, and gray.');
    break;
  }

  if (favColors.includes(favColorGuess)) {
    alert('Yes, that is one of my favorite colors. These are all my favorite colors: purple, green, blue, teal, and gray.');
    correctAnswer++;
    console.log(favColorGuess + '. The user guessed correctly');
    break;
  }

  else {
    alert('No, guess again.');
  }
}

//alert to give user the total number of correct answers they got
alert('You got ' + correctAnswer + ' out of 7 answers correct. Thanks for playing!');
console.log('The user guessed ' + correctAnswer + ' out of 7 answers correctly.');