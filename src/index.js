let currentZodiacs;

const westernZodiac = (zodiacs) => {
    currentZodiacs = "Western"
    const selectSpan = document.querySelectorAll("span")
        for (let i = 0; i < selectSpan.length; i++) {
        selectSpan[i].textContent = zodiacs.western_zodiac[i].name
        selectSpan[i].className = "west-span"
        selectSpan[i].addEventListener("click", () => {
            if (selectSpan[i].className === "west-span") {
                renderZodiacsW(zodiacs.western_zodiac[i])

            }
        })
    }
  }

  function renderZodiacsW(zodiacs){
    const zodiacName = document.querySelector("#zodiac-name")
    zodiacName.textContent = "Western Zodiac: " + zodiacs.name

    const longitudeStart = document.querySelector("#longitude-start")
    longitudeStart.textContent = "Longitude start: " + zodiacs.longitude_start

    const longitudeEnd = document.querySelector("#longitude-end")
    longitudeEnd.textContent = "Longitude end: " + zodiacs.longitude_end

    const zodiacGloss = document.querySelector("#zodiac-gloss")
    zodiacGloss.textContent = "Gloss: " + zodiacs.gloss
    
    const zodiacElement = document.querySelector("#zodiac-element")
    zodiacElement.textContent = "Element: " + zodiacs.element

    const zodiacRulingBodyClassic = document.querySelector("#zodiac-ruling_body-classic")
    zodiacRulingBodyClassic.textContent = "Classic zodiac ruling: " + zodiacs.ruling_body_classic

    const zodiacRulingBodyModern = document.querySelector("#zodiac-ruling-body-modern")
    zodiacRulingBodyModern.textContent = "Modern zodiac ruling body: " + zodiacs.ruling_body_modern

    const zodiacPersonality = document.querySelector("#zodiac-personality")
    zodiacPersonality.textContent = "Personality: " + zodiacs.keywords.join(', ')

    const zodiacDate = document.querySelector('#zodiac-dates')
    zodiacDate.textContent = "Date Range: " + zodiacs.dates

    const zodiacSymbol = document.querySelector("#symbol")
    zodiacSymbol.textContent = "Symbol: " + zodiacs.unicode_symbol
}

const easternZodiac = (zodiacs) => {
    currentZodiacs = "Eastern"
    const selectSpan = document.querySelectorAll("span")
    for (let i = 0; i < selectSpan.length; i++) {{
        selectSpan[i].textContent = zodiacs.eastern_zodiac[i].name
        selectSpan[i].className = "east-span"
        selectSpan[i].addEventListener("click", () => {
            if (selectSpan[i].className === "east-span") {
                renderZodiacsE(zodiacs.eastern_zodiac[i])
            }
        })
    }
  }
}

function renderZodiacsE(zodiacs) {
    const eastZodiacName = document.querySelector("#zodiac-east-name")
    eastZodiacName.textContent = "Eastern Zodiac: " + zodiacs.name

    const yinYang = document.querySelector("#yin-yang")
    yinYang.textContent = "Yin-Yang: " + zodiacs["yin-yang"]

    const zodiacDirection = document.querySelector("#direction")
    zodiacDirection.textContent = "Direction: " + zodiacs.direction

    const zodiacSeason = document.querySelector("#season")
    zodiacSeason.textContent = "Season: " + zodiacs.season

    const zodiacEastElement = document.querySelector("#zodiac-east-element")
    zodiacEastElement.textContent = "Element: " + zodiacs.element

    const trine = document.querySelector("#trine")
    trine.textContent = "Trine: " + zodiacs.trine

    const zodiacYears = document.querySelector("#years")
    zodiacYears.textContent = "Years: " + zodiacs.years.join(', ')

    const zodiacUnicode = document.querySelector("#east-symbol")
    zodiacUnicode.textContent = "Symbol: " + zodiacs.unicode_symbol
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/zodiacs')
    .then(res => res.json())
    .then(zodiacs => {     
        zodiacs.western_zodiac.forEach((zodiacsW) => {  
        const zodiacBarSelector = document.querySelector('#zodiac-bar')
        const createSpan = document.createElement("span")
        createSpan.className = "west-span"
        zodiacBarSelector.appendChild(createSpan)
    })
    renderZodiacsW(zodiacs.western_zodiac[0])
    renderZodiacsE(zodiacs.eastern_zodiac[0])
    westernZodiac(zodiacs)
        const switchButton = document.querySelector("#east-west-button")
        switchButton.addEventListener("click", () => {
        if (currentZodiacs === "Western") {
            switchButton.textContent = "East Zodiacs"
            easternZodiac(zodiacs)
        } else {
            switchButton.textContent = "West Zodiacs"
            westernZodiac(zodiacs)
        }
    })
    })
})



