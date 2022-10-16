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

give.addEventListener('click', 
    goOut
)
