let currentZodiacs;

const westernZodiac = (zodiacs) => {
    currentZodiacs = "Western"
    const selectSpan = document.querySelectorAll("span")
    selectSpan.forEach((eachSpan, i) => {
        zodiacs.western_zodiac.map((zodiacsW) => {
            selectSpan[i].textContent = zodiacs.western_zodiac[i].name
      }) 
    })

  }

const easternZodiac = (zodiacs) => {
    currentZodiacs = "Eastern"
    const selectSpan = document.querySelectorAll("span")
    selectSpan.forEach((eachSpan, i) => {
        zodiacs.eastern_zodiac.map((zodiacsE) => {
            selectSpan[i].textContent = zodiacs.eastern_zodiac[i].name
      }) 
      }) 
  }

//   function renderZodiacs(zodiacsW){
//     const zodiacInfo = document.querySelector("#zodiac-info")
//     const createUlElement = document.createElement('ul')
//     zodiacInfo.appendChild(createUlElement)
//     const createLiElement = document.createElement("li")
//     createUlElement.appendChild(createLiElement)
  
//     createLiElement.textContent = zodiacsW.longitude_start

//     createLiElement.textContent = zodiacsW.longitude_end
//     console.log(createLiElement);
//   }

  const westernZodiacClick = () => {

  }


document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/zodiacs')
    .then(res => res.json())
    .then(zodiacs => {     
        zodiacs.western_zodiac.forEach((zodiacsW) => {  
        const zodiacBarSelector = document.querySelector('#zodiac-bar')
        const createSpan = document.createElement("span")
        zodiacBarSelector.appendChild(createSpan)
        })
        westernZodiac(zodiacs)
        
        const switchButton = document.querySelector("#east-west-button")
        switchButton.addEventListener("click", () => {
        if (currentZodiacs === "Western") {
            easternZodiac(zodiacs)
        } else {
            westernZodiac(zodiacs)
        }
    })
    })
})



