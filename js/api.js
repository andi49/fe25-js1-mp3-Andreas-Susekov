const fetchMyApi = async (num, numCatergory, difficultyGame) => {
    try { 
const URL = `https://opentdb.com/api.php?amount=${num}&category=${numCatergory}&difficulty=${difficultyGame}&type=multiple`
  const response = await fetch(URL)
  const data = await response.json()
 console.log("Fetching URL:", URL);
  return data.results

} catch (error) {
    console.log(error);
  }

}


const fetchCatergoris = async () => {
  try {
       const URL_CATEGORY = `https://opentdb.com/api_category.php`
       const responseCaterory = await fetch(URL_CATEGORY)
       const dataCaterory = await responseCaterory.json()

       return dataCaterory.trivia_categories

  } catch (error){
     console.log(error);
  }
}


export {fetchMyApi, fetchCatergoris}