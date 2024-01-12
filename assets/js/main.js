// 1. Fetch the API using XHR
const API_URL = "https://api.adviceslip.com/advice";

// const adviceAPI = new XMLHttpRequest();
// adviceAPI.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     const stringObj = adviceAPI.responseText;
//     const jsonObj = JSON.parse(stringObj);

//     console.log(jsonObj.slip.advice);
//   }
// };

// adviceAPI.open("GET", API_URL);
// adviceAPI.send();

// 1. Call the API
// const API_URL_to_Fetch = "https://api.adviceslip.com/advice";

// 2. Fetch the API
// const result = fetch(API_URL_to_Fetch)
//   .then((Response) => Response.json())
//   .then((data) => console.log(data.slip)).catch((error) => console.log("Some network error!!!"))

const adviceBlockquoteEl = document.querySelector("blockquote")
const refreshButton = document.querySelector("div > button")
refreshButton.style.display = 'none'

refreshButton.addEventListener("click", () => {
    window.location.href = '/'
})

//! Using Fetch() proper method
async function getAdvicesData() {

  try {
    const response = await fetch(API_URL);
    const jsonObj = await response.json();
    // console.log("Advice: ", jsonObj);

    return jsonObj
  } catch (error) {
    console.log("Error: ", error);
  }

}

const adviceData = await getAdvicesData()
console.log(adviceData.slip.advice);

adviceBlockquoteEl.innerText = adviceData.slip.advice
refreshButton.style.display = 'block'
