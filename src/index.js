fetch('http://localhost:3000/zodiacs')
  .then(resp => resp.json())
  .then(zodiacs => {
    renderZodiacs(zodiacs["western_zodiac"], zodiacs["eastern_zodiac"])

    
})


// fetch('http://localhost:3000/eastern_zodiac')
//   .then(resp => resp.json())
//   .then(zodiacsE => {
//     renderZodiacs(zodiacsE)
//   })

    

function renderZodiacs(zodiacs){
  const zodiacName = document.querySelector('#zodiac-bar')
  zodiacName.textContent = zodiacs.name
  const longitudeStart = document.createElement('p')
  
  zodiacs.forEach((zodiac) => {
    
  }) 
}





