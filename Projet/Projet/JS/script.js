class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

let questions = [
    new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau", ["indexOf()", "map()", "filter()", "reduce()"], "filter()"),
    new Question("Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau", ["isNaN()", "includes()", "findIndex()", "isOdd()"], "includes()"),
    new Question("Quelle méthode transforme du JSON en un objet Javascript ?", ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"], "JSON.parse()"),
    new Question("Quel objet Javascript permet d'arrondir à l'entier le plus proche", ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"], "Math.round()"),
    new Question("Quelle est la methode Javascript qui permet d'ajouter un element a la fin d'un tableau?",[ "push()" ,"append()", "addToEnd()" , "insertAtEnd"], "push()")]

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function() {
        let endQuizHTML = `
      <h1>Quiz terminé !</h1>
      <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
        this.elementShown("quiz", endQuizHTML);
        document.getElementById("restartBtn").classList.remove("hidden");
    },
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;

        for (let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            document.getElementById("guess" + i).onclick = () => {
                quiz.guess(choices[i]);
                quizApp();
            }
        }
    },
    progress: function() {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
};

// Game logic
function quizApp() {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
}

// Create Quiz
let quiz = new Quiz(questions);
quizApp();

function restartQuiz() {
    window.location.reload();

}
// Add event listener for the restart button
document.getElementById("restartBtn").onclick = restartQuiz;

document.getElementById('profile-image').addEventListener('click', function() {
    window.location.href = 'mailto:noeponcet@gmail.com';
});

