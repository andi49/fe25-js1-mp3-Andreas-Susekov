import { fetchMyApi, fetchCatergoris } from "./js/api.js";

const getCaterogy = document.querySelector("#category");
const getdifficulty = document.querySelector("#difficulty");
const getNumberEl = document.querySelector("#number");

let gameScore = 0

getNumberEl.addEventListener("input", () => {
  const num = getNumberEl.value;
});

function displayCotergi(cat) {
  cat.forEach((category) => {
    const option = document.createElement("option");

    option.innerText = category.name;
    option.value = category.id;

    getCaterogy.append(option);
  });
}

const difficultyChose = [
  { id: "easy", name: "Easy" },
  { id: "normal", name: "Normal" },
  { id: "hard", name: "Hard" },
];

function displayDifficulty(def) {
  def.forEach((difficultyValue) => {
    const optionTwo = document.createElement("option");
    optionTwo.innerText = difficultyValue.name;
    optionTwo.value = difficultyValue.id;
    getdifficulty.append(optionTwo);
  });
}

//  ---------------- ---------------- ---------------- ---------------- ---------------- ---------------- ----------------

fetchCatergoris().then(displayCotergi);
displayDifficulty(difficultyChose);

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const number = document.querySelector("#number").value;
  const category = document.querySelector("#category").value;
  const difficulty = document.querySelector("#difficulty").value;

  console.log({ number, category, difficulty });
  const callAPI = await fetchMyApi(number, category, difficulty);





  function shuffleArrays() {

      document.querySelector("form").style.display = "none";

  

      const showQuest = document.getElementById("question");

      for (let i = 0; i < callAPI.length; i++) {
        
        const getQuestion = callAPI[i].question;
        showQuest.innerText = getQuestion
    }
   
  
    let answersOne = callAPI[i].incorrect_answers;
    let answerTwo = callAPI[i].correct_answer;
    console.log(answersOne, answerTwo);

    let allAnswers = [...answersOne, answerTwo];
    let shuffleArray = allAnswers.sort(() => Math.random() - 0.5);

    console.log(shuffleArray);
    const answerButtonsDiv = document.getElementById("answerButtons");

    shuffleArray.forEach((answer) => {
      const buttonFake = document.createElement("button");
      buttonFake.textContent = answer;
      buttonFake.classList.add("answer-button");
      buttonFake.value = answer;

      answerButtonsDiv.appendChild(buttonFake);

      buttonFake.addEventListener('click', () => {
        console.log('I have been clicked')
      }) 
    });

  }


  shuffleArrays();
 

  console.log(callAPI);
});



 //  const getCorrectAnswer = document.getElementById('answers')
    //  getCorrectAnswer.innerText = callAPI[0].correct_answer