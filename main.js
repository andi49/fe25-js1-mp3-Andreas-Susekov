const fetchAPI = async () => {
    try { 
// const URL = `https://opentdb.com/api.php?${amount}=10&category=9&difficulty=${difficultyGame}&type=multiple`
const URL = `https://opentdb.com/api_category.php`
const response = await fetch(URL)
const data = await response.json()

return data.trivia_categories
} catch (error) {
    console.log(error);
  }

}
function displayCotergi (arr) {
const getCaterogy = document.querySelector('#category')

  for (const category of arr) {
    const option = document.createElement("option");
    option.innerText = category;
    console.log(category);

   option.innerText = category.name    // <-- Correct text
    option.value = category.id          // <-- Correct value

    getCaterogy.append(option);
  }

}
fetchAPI().then(displayCotergi)




const getName = document.querySelector('#name')
const amount = document.querySelector('#number')

