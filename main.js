import { fetchAPI } from "./js/api.js";

const getCaterogy = document.querySelector('#category')
const getdifficulty = document.querySelector('#difficulty')
const getNumberEl = document.querySelector('#number')

getNumberEl.addEventListener('input', () => {
  const value = getNumberEl.value

  console.log(value)
})  



function displayCotergi (cat) {

 cat.forEach(category => {
  const option = document.createElement("option");

    console.log(category);

    option.innerText = category.name    
    option.value = category.id         

    getCaterogy.append(option);
 });
}

getCaterogy.addEventListener('change', (event) => {
  const selectedValue = event.target.value
  console.log('You selected', selectedValue)
})

//  ---------------- ---------------- ---------------- ---------------- ---------------- ---------------- ----------------

const difficultyChose = [
  {id: 'easy', name: 'Easy' },
    {id: 'normal', name: 'Normal' },
      {id: 'hard', name: 'Hard' }
]


function displayDifficulty (def) {

def.forEach(diff => {
  const optionTwo = document.createElement("option");
  optionTwo.innerText = diff.name;
  optionTwo.value = diff.id;
  getdifficulty.append(optionTwo);
});
}

getdifficulty.addEventListener('change', (event) => {
  const selectedValue = event.target.value
  console.log('You selected', selectedValue)
})



fetchAPI().then(displayCotergi)
displayDifficulty(difficultyChose)



const getName = document.querySelector('#name')
const amount = document.querySelector('#number')

