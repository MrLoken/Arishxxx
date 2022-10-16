
let nav = document.getElementById('nav')
let button = document.getElementById('nav-button')
let fafa = document.getElementById('fafa')
let give = document.getElementById('give')

let indexOpenClose = true

function goOut(){
    nav.classList.remove('open')
    fafa.classList.remove('fa-xmark')
    fafa.classList.add('fa-bars')
}


function addClass(){
    if(indexOpenClose){    
        nav.classList.add('open')
        fafa.classList.remove('fa-bars')
        fafa.classList.add('fa-xmark')

        indexOpenClose = !indexOpenClose
    }
    else{
        goOut()

        indexOpenClose = !indexOpenClose
    }

}


button.addEventListener('click', 
    addClass
)


let buttonStreet = document.querySelector(".street-button")
let street = document.querySelector(".street")

let holidaysButton = document.querySelector(".holidays-button")
let holidays = document.querySelector(".holidays")

let PortfolioButton = document.querySelector(".portfolio-button")
let portfolio = document.querySelector(".portfolio-title")

let brawlPassButton = document.querySelector(".brawl-pass-button")
let brawlPass = document.querySelector(".bread")

buttonStreet.addEventListener('click', () => {
    ScrollTo(street);
    goOut()
})

holidaysButton.addEventListener('click', () => {
    ScrollTo(holidays);
    goOut()
})

PortfolioButton.addEventListener('click', () => {
    ScrollTo(portfolio);
    goOut()
})

brawlPassButton.addEventListener('click', () => {
    ScrollTo(brawlPass);
    goOut()
})

