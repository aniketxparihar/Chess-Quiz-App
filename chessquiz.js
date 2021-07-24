//Calling Libraries
var read = require('readline-sync')
var chalk = require('chalk')
let table = require("table");

//Welcome 
console.log(chalk.green('Welcome to the Chess Quiz'));
//Enter the Username
var username = read.question(chalk.green("What is your Name: \n"));
console.log(chalk.magenta.bgWhite(`Hey ${username}! Let's get started!!`));
console.log('\n');


//Rules and Instructions
console.log(chalk.magenta.bgWhite.underline('Rules & Instructions: '));
console.log(chalk.green('1.', username + ', There are 10 Questions.'));
console.log(chalk.green('2. You will get 10 marks for each Right Answer.'));
console.log(chalk.green('3. Ten Point will be deducted if the Answer is Wrong.'));
console.log(chalk.green('4. In MCQ based questions you have to type the Serial Number / Index Value.'));
console.log('\n');

//LeaderBoard
let config;
console.log(chalk.red('LeaderBoard:'));
console.log(chalk.cyanBright('Name       Score'));
var leaderboard = [
    ['Aniket', '60'],
];
config = {
  // Predefined styles of table
  border: table.getBorderCharacters("ramac"),
}
let x = table.table(leaderboard,config);
console.log(x);

//Score Counter
var score = 0;

//function for part 1 single answers
function part1(question, answer) {
    var userAnswer = read.question(question);

    if (userAnswer.toLowerCase() == answer.toLowerCase()) {
        console.log(chalk.green('You are Right.'));
        score+= 10;
    } else {
        console.log(chalk.red('You are Wrong.'));
        console.log(chalk.blue('The Correct Answer is:', answer));
        score-=10;
    }

    if (score < 0) {
        score = 0;
    }
    console.log(chalk.green('Score is: ', score));
}

//function for part two MCQ Type Questions
function part2(Answers, question, answer) {//Search KeyInSelect on npm site
    var userAnswer = read.keyInSelect(Answers, question);
    console.log('\n');
    if (Answers[userAnswer] === answer) {
        console.log(chalk.green('You are Right.'));
        score = score + 10;
    } else {
        console.log(chalk.red('You are Wrong.'));
        console.log(chalk.blue('The Correct Answer is: ', answer));
        score = score - 10;
    }

    if (score < 0) {
        score = 0;
    }

    console.log(chalk.green('Score is: ', score));
}

//Single Questions Object
var questionsList = [{
        question: 'This piece has limited movement. Its capture or mate means the end the game: ',
        answer: 'King',
    },
    {
        question: 'Its movement is a combination of the Rook and Bishop: ',
        answer: 'Queen',
    },
    {
        question: 'Its movement forms an L shape and can jump overhead the piece blocking it: ',
        answer: 'Knight',
    },
    {
        question: 'As long as its line of sight is clear, this piece moves in a straight, diagonal line: ',
        answer: 'Bishop',
    },
    {
        question: 'Who became the Youngest Grandmaster in 2021: ',
        answer: 'Abhimanyu Mishra',
    }
];

//MCQ Questions Object
var mcqList = [

    {
        array: ['50', '56', '62', '64'],
        question: 'How many boxes does the Chessboard have?',
        answer: '64'
    },
    {
        array: ['stalemate', 'checkmate', 'Castle'],
        question: 'This situation ends the game in a draw where the player can no longer make any legal moves; however, his/her King is not in check',
        answer: 'stalemate'
    },
    {
        array: ['China', 'India', 'Russia', 'Belgium'],
        question: 'Which country has the largest number of Grand Masters?',
        answer: 'Russia'
    },
    
    {
        array: ['50', '10', '32', '36'],
        question: 'At the start of a chess game, how many pieces are there in total on a chess board?',
        answer: '32'
    },
    {
        array: ['India', 'China', 'England', 'Australia'],
        question: 'Chess is originated from which country?',
        answer: 'India'
    },
];


//For loop to traverse through the single Questions and pass on to function part1()
for (var i = 0; i < questionsList.length; i++) {
    console.log('\n');
    console.log(chalk.cyanBright('Question', i + 1));
    part1(questionsList[i].question, questionsList[i].answer);
    console.log('-------------*---------------*---------------*--------------*');
}

//For loop to traverse through the MCQ Type Questions and pass on to function part2()
var j = 5;
for (var i = 0; i < mcqList.length; i++) {
    console.log('\n');
    console.log(chalk.cyanBright('Question', j++));
    part2(mcqList[i].array, mcqList[i].question, mcqList[i].answer);
    console.log('-------------*---------------*---------------*--------------*');
}

//End. Thanks For Reading.
console.log('\n');
console.log(chalk.cyanBright.italic.underline('Congratulations,', username, 'your Total Score is: ', score));
console.log('\n');
console.log(chalk.yellowBright.italic('You finished the quiz.If You have beaten the top score send a screenshot to @aniketxparihar on twitter'));
