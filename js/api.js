const fetchAPI = async (num,numCatergory,difficultyGame) => {
    try { 
 const URL_FAKE = `https://opentdb.com/api.php?$amount=${num}&category=${numCatergory}&difficulty=${difficultyGame}&type=multiple`
const URL = `https://opentdb.com/api_category.php`
const response = await fetch(URL)
const data = await response.json()

return data.trivia_categories
} catch (error) {
    console.log(error);
  }

}

export {fetchAPI}