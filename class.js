// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.
// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)
class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvailable=isAvailable;
        
        this.toggleAvailability=function () {
            
            this.isAvailable = !this.isAvailable;
            console.log(this.isAvailable)
            
        }
          


    }

}
let car1=new Car("TOYOTA","Camry",2015,true)
car1.toggleAvailability()
// 2) Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.
class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=Car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;

      this.calculateRentalDuration=function () {
            const timeDiff = this.rentalEndDate .getTime()- this.rentalStartDate.getTime();//returns the time value of a Date object as a number data type, 
           const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));//converts milliseconds to days
          console.log(daysDiff)
            
        }

        

    }
    
}

const rental1 = new Rental(car1, "John Doe", new Date("2023-05-01"), new Date("2023-05-05"));
const rentalDuration = rental1.calculateRentalDuration();



// 3) Create an instance of the Car class or function constructor for a car in the
// inventory. Then, create an instance of the Rental class or function constructor for
// a rental involving the car you created. Finally, calculate the rental duration using
// the calculateRentalDuration method.
let car2=new Car("Voxy","swagen",2012,false)
car2.toggleAvailability()
let rental2=new Rental(car1,"rita kim",new Date("2023-03-27"),new Date("2023-04-10"));
rental2.calculateRentalDuration();

//class declaration
//the constructor function always gets called whenever we instantiate a class
                   //always add your properties in the constructor function as an argument



// Question2
// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.
// 1. Create a Question class with the following properties:
// ● text(string): The text of the question.
// ● options(array): An array containing the multiple-choice options.
// ● correctAnswer(string): The correct answer to the question.

// The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false
// otherwise.
class Question{
    constructor(text,options,correctAnswer){
        this.text=text;
        this.options=options;
        this.correctAnswer=correctAnswer;
    }
        
    
    checkAnswer(answer){
        return this.correctAnswer===answer
        

    }
    
}
let quiz1= new Question("What is the capital city of kenya?",["Nairobi","uganda","kisumu","Busia"],"Nairobi")
let answer="Nairobi"
console.log(quiz1.checkAnswer(answer))
// 2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct

class Quiz {
    constructor(questions,currentQuestionIndex,score) {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score =0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(answer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(answer)) {
        this.score++;
      }
    }
  }
// Create a new quiz
const quiz = new Quiz(0,"what is a man's best friend",0);


const question1 = new Question('what is a mans best friend ?', ['cow', 'dog', 'cat'], 0);
const question2 = new Question('What is the highest mountain in the world?', ['Mount Everest', 'K2', 'Makalu'], 0);
quiz.addQuestion(question1);
quiz.addQuestion(question2);
console.log(this.questions)

// Ask the questions and submit answers
console.log(quiz.questions[quiz.currentQuestionIndex].text); // "What is the capital of France?"
quiz.submitAnswer('dog');
quiz.nextQuestion();
console.log(quiz.questions[quiz.currentQuestionIndex].text); // "What is the highest mountain in the world?"
quiz.submitAnswer('Mount Everest');

// Score
console.log(`Your score is ${quiz.score}/${quiz.questions.length}`);
  





  


