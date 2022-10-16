let index = 0;

show_imageStreet(index)
show_imageHolidays(index)
show_imagePortfolio(index)
show_imageBread(index)

function image(images, dots){
    for(i = 0; i < images.length; i++) images[i].style.display = 'none'
 
    for(i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "")

    if(index > images.length - 1) index= 0
    if(index < 0) index = images.length - 1
    
    images[index].style.display = "block"
    dots[index].className += " active"
}

function show_imageStreet(i){
    index += i

    let images = document.getElementsByClassName('image-street')
    let dots = document.getElementsByClassName('br')

    image(images, dots)

}

function show_imageHolidays(i){
    index += i

    let imagesHolidays = document.getElementsByClassName('image-holidays')
    let dotsHolidays = document.getElementsByClassName('bar')

    image(imagesHolidays, dotsHolidays)

}

function show_imagePortfolio(i){
    index += i

    let imagesPortfolio = document.getElementsByClassName('image-portfolio')
    let dotsPortfolio = document.getElementsByClassName('pf')

    image(imagesPortfolio, dotsPortfolio)
}

function show_imageBread(i){
    index += i
    
    let imagesBread = document.getElementsByClassName('image-bread')
    let dotsBread = document.getElementsByClassName('bd')

    image(imagesBread, dotsBread)
}


