var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

console.log(chalk.bold.white.bgGreenBright ("THE BEATLES TRIVIA"));
console.log(" ");
var userName = readlineSync.question("What is your name? : ");

console.log("Welcome "+chalk.bold.cyan(userName)+" to the Beatles trivia game");
console.log(" ");
console.log(chalk.yellowBright("RULES OF THE QUIZ are..."));
console.log("Enter 'a' or 'b' or 'c' for your answer");
console.log("For every right answer your score will be + d by 2");
console.log("For every wrong answer your score will be - d by 1");
console.log("...............................................................");
console.log(" ");
console.log(" ");

function quiz(question, answer, correct, n){
  var userAnswer = readlineSync.question(chalk.bold.blue("Q"+n+": "+question));
  console.log(" ");
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.bold.green("Yeah! You are right"));
    score = score + 2;
    console.log(chalk.bold.magenta("Your current score is : "+score));
  }else{
    console.log(chalk.bold.red("Oh! You are wrong"));
    score = score - 1;
    console.log(chalk.bold.blueBright("Correct answer is : "+correct));
    console.log(chalk.bold.magenta("Your current score is : "+score));
    console.log(" ");
  }
}

var questionList1 = [
  {
    question: `Which Beatle crossed Abbey Road first?
    a: John
    b: Ringo
    c: Paul
    d: George\n`,
    answer: "a",
    correct:"John"
  },
  {
    question: `Why did the BBC ban 'I Am the Walrus'?
    a: Drug references
    b: PETA Protests
    c: WWF law suit
    d: Use of the word 'Knickers'\n`,
    answer: "d",
    correct:"Use of the word 'Knickers'"
  },
  {
    question: `What was the working title of 'Yesterday'?
    a: I Believe
    b: The day before
    c: Scrambled Eggs
    d: All My Troubles\n`,
    answer: "c",
    correct:"Scrambled Eggs"
  },
  {
    question: `When were the Beatles inducted into the Rock and Roll Hall of Fame?
    a: 1988
    b: 1969
    c: 1975
    d: 1981\n`,
    answer: "a",
    correct:'1988'
  },
  {
    question: `What was the first Beatles album to include the complete lyrics?
    a: White Album
    b: Revolver
    c: Abbey Road
    d: Sgt.Pepper\n`,
    answer: "d",
    correct:'Sgt.Pepper'
  },
  {
    question: `What name did the group go by before they were the Beatles?
    a: The Quarry Men
    b: John and the moon dogs
    c: The black jacks
    d: All of these\n`,
    answer: "d",
    correct:"All of these"
  }
];



function play1(){
  for(var i=0; i<questionList1.length; i++){
  quiz(questionList1[i].question, questionList1[i].answer, questionList1[i].correct, i+1);
}
}
play1();

var highScores = 
{
  name: "JK",
  score: 10
};
var userScores = 
{
  name: userName,
  score: score
};

console.log(" ");
console.log(".........................................................................");
console.log(chalk.cyan.bold("Great job "+userName+"! See how well you've done below"));
console.log(chalk.bold.greenBright("Your Score is = "+score));
if(userScores.score >= highScores.score){
  console.log(chalk.bold.green("New Highscore! You are a true beatlemaniac!"));
}else{
  console.log(chalk.bold.yellow("HighScore is = "+highScores.score));
}