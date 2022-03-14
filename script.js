var readmore = document.querySelector('.modal')
var xIcon = document.querySelector('.hiddenbox i')
var box = document.querySelector('.hiddenbox')
box.style.display = 'none'
xIcon.onclick = function(){
    box.style.display = 'none'
}
readmore.onclick = function(){
    box.style.display = 'block'
}

var hambtn = document.getElementById('bar')
var navbar = document.getElementById('navbar')

navbar.style.right = '-250px'

hambtn.onclick = function(){
    if(navbar.style.right == '-250px'){
        navbar.style.right = '17px'
    }else{
        navbar.style.right = '-250px'
    }
}