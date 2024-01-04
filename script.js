const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which language is object orinanted?",
        choices: ["Javascript", "CSS", "Java", "HTML"],
        correctAnswer: "Javascript"
    },
    {
        question: "What is the largest mammal on Earth?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach((choice, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${choice}`;
        listItem.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(listItem);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedChoice = currentQuestion.choices[selectedIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Wrong! The correct answer is: " + currentQuestion.correctAnswer;
    }

    scoreElement.textContent = score;
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        feedbackElement.textContent = "";
        nextButton.disabled = true;
    } else {
        alert(`Quiz completed! Your final score is: ${score}`);
    }
}

nextButton.addEventListener("click", nextQuestion);

