/* Hello I am crete a simple qiuz app */

const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            { text: "shark", isCorrect: false },
            { text: "Blue whale", isCorrect: true },
            { text: "Elephant", isCorrect: false },
            { text: "Giraffe", isCorrect: false }
        ]
    },
    {
        question: "Who succeeded emperor Jahandar Shah to the Mughal throne ?",
        answers: [
            { text: "Jahandar Shah", isCorrect: false },
            { text: "Bahadur Shah I", isCorrect: false },
            { text: "Aurangzeb", isCorrect: false },
            { text: "Farrukhsiyar", isCorrect: true }
        ]
    },
    {
        question: "Which of the following is the name of river ?",
        answers: [
            { text: "Auraiya", isCorrect: false },
            { text: "Girna", isCorrect: true },
            { text: "Erode", isCorrect: false },
            { text: "Purnia", isCorrect: false }
        ]
    },
    {
        question: "Who among the following authored 'The Gandhian Plan' in 1944 ?",
        answers: [
            { text: "MS Swaminathan", isCorrect: false },
            { text: "SN Agarwal", isCorrect: true },
            { text: "Jawaharlal Nehru", isCorrect: false },
            { text: "Mahatma Gandhi", isCorrect: false }
        ]
    },
    {
        question: "Whare in India is the 'Valley of Flowers' located ?",
        answers: [
            { text: "Arunachal Pradesh", isCorrect: false },
            { text: "Mizoram", isCorrect: false },
            { text: "Himanchal Pradesh", isCorrect: false },
            { text: "Uttarakhand", isCorrect: true }
        ]
    },
    {
        question: "Which of the following is an India city ?",
        answers: [
            { text: "Tirunelveli", isCorrect: true },
            { text: "Sutlej", isCorrect: false },
            { text: "Manair", isCorrect: false },
            { text: "Kali", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is a monument or side of significance ?",
        answers: [
            { text: "Tibet", isCorrect: false },
            { text: "Potala Palace", isCorrect: true },
            { text: "Uttar Pradesh", isCorrect: false },
            { text: "Lucknow", isCorrect: false }
        ]
    },
    {
        question: "In which State of India is Pune located ?",
        answers: [
            { text: "Maharashtra", isCorrect: true },
            { text: "Madhya Pradesh", isCorrect: false },
            { text: "Gujarat", isCorrect: false },
            { text: "Andhra Pradesh", isCorrect: false }
        ]
    },
];

const question = document.getElementById("Question");
const btns = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("next-btn");
const nextQuiz = document.getElementById("next-quiz");
const result = document.getElementById("results");


let queCount = 0;
let isClick = false;
let writeQue = 0;
let correctValue = "";

setQuestion(queCount);


function setQuestion(ind) {

    if (ind === questions.length - 1) {
        nextBtn.innerText = 'Sumbit';
    }
    else {
         nextBtn.innerText = 'Next';
    }

    let que = questions[ind].question;
    let ans = questions[ind].answers;

    ans.forEach((val, ind) => {
        btns[ind].innerText = val.text;

    });

    question.innerText = `Q.${ind + 1} ${que}`;
}


function click(ind, btn) {
    let ans = questions[ind].answers;

    if (isClick) {

    } else {
        ans.forEach((val) => {
            isClick = true;
            nextBtn.style.display = 'block';
            if (val.isCorrect === true) {
                correctValue = val.text;
                if (btn.innerText === val.text) {
                    btn.classList.add("btn-green");
                    writeQue += 1;
                    console.log(`${val.text} = ${btn.innerText}`);

                } else {
                    btn.classList.add("btn-red");
                    findWrite(correctValue);
                    console.log(`${val.text} = ${btn.innerText}`);
                }
            } else {

            }
        });
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        click(queCount, btn);
        removeHover();
    })
});

function removeHover() {
    btns.forEach((btn) => {
        btn.classList.remove("hover")
    });
}

function findWrite(val) {
    btns.forEach((btn) => {
        if (btn.innerText === val) {
            btn.classList.add("btn-green");
        }
    });
}

nextBtn.addEventListener("click", () => {

    if (questions.length - 1 > queCount) {
        queCount += 1;
        setQuestion(queCount);
        nextBtn.style.display = 'none';
        isClick = false;
        correctValue = "";
        console.log(queCount);

        btns.forEach((btn) => {
            btn.classList.remove("btn-green");
            btn.classList.remove("btn-red");
        });
    } else {
        document.querySelector(".quiz").style.display = "none";
        document.querySelector(".result").style.display = "block";
        result.innerHTML = `Your Score is <b>${writeQue}</b> Out of <b>${questions.length}</b>.`
    }
});

nextQuiz.addEventListener("click", () => {
    document.querySelector(".quiz").style.display = "block";
    document.querySelector(".result").style.display = "none";
    queCount = 0;
    writeQue = 0;
    isClick = false;
    setQuestion(0);
    btns.forEach((btn) => {
        btn.classList.remove("btn-green");
        btn.classList.remove("btn-red");
    });
});