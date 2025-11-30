const fetchAPI = async () => {
    try { 
const URL = `https://opentdb.com/api.php?${amount}=10&category=9&difficulty=${difficultyGame}&type=multiple`
const response = await fetch(URL)
const data = await response.json()

return data
} catch (error) {
    console.log(error);
  }

}

const getName = document.querySelector('#name')
const amount = document.querySelector('#number')
const category = document.querySelector('#category')
const difficultyGame = document.querySelector('#difficulty')