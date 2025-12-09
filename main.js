import { fetchMyApi, fetchCatergoris } from "./js/api.js";

const getCaterogy = document.querySelector('#category')
const getdifficulty = document.querySelector('#difficulty')
const getNumberEl = document.querySelector('#number')



getNumberEl.addEventListener('input', () => {
  const num = getNumberEl.value
})  



function displayCotergi (cat) {

 cat.forEach(category => {
  const option = document.createElement("option");

    option.innerText = category.name    
    option.value = category.id         

    getCaterogy.append(option);
 });
}

//  ---------------- ---------------- ---------------- ---------------- ---------------- ---------------- ----------------

const difficultyChose = [
  {id: 'easy', name: 'Easy' },
    {id: 'normal', name: 'Normal' },
      {id: 'hard', name: 'Hard' }
]


function displayDifficulty (def) {

def.forEach(difficultyValue => {
  const optionTwo = document.createElement("option");
  optionTwo.innerText = difficultyValue.name;
  optionTwo.value = difficultyValue.id;
  getdifficulty.append(optionTwo);
});
}

getdifficulty.addEventListener('change', (event) => {
  const selectedValue = event.target.value
  // console.log('You selected', selectedValue)
})

fetchCatergoris().then(displayCotergi)
displayDifficulty(difficultyChose)


document.querySelector("form").addEventListener("submit",  async (event) => {
  event.preventDefault();

 const number = document.querySelector('#number').value
 const category = document.querySelector('#category').value
 const difficulty = document.querySelector('#difficulty').value

 console.log({ number, category, difficulty });
 const callAPI = await fetchMyApi(number, category, difficulty)

 document.querySelector("form").style.display = "none";

 function getQuestionFromAPI() {

  const getQuest = document.getElementById('question')

  getQuest.innerText = callAPI[0].question
//  const getCorrectAnswer = document.getElementById('answers')
//  getCorrectAnswer.innerText = callAPI[0].correct_answer
}

function shuffleArrays() {

let answersOne = callAPI[0].incorrect_answers
let answerTwo = callAPI[0].correct_answer
console.log(answersOne, answerTwo) 

let allAnswers = [...answersOne, answerTwo]
let shuffleArray = allAnswers.sort(() => Math.random() - 0.5)

console.log(shuffleArray)
 const answerButtonsDiv = document.getElementById('answerButtons')

shuffleArray.forEach((answer) => {
  const button = document.createElement("button");
  button.textContent = answer;
  button.classList.add("answer-button"); 
  button.value = answer; 

  answerButtonsDiv.appendChild(button);
});

}


getQuestionFromAPI()
shuffleArrays()

console.log(callAPI)
})




