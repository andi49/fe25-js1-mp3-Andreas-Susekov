const fetchAPI = async () => {
    try { 
const URL = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
const response = await fetch(URL)
const data = await response.json()

return data
} catch (error) {
    console.log(error);
  }

}