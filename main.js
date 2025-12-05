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
 
console.log(callAPI)
})


