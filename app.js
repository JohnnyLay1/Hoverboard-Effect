const boxes = document.getElementById('boxes')
let box = 500
const colors = ['#e74c3c', '#8e44ad', 'green', 'purple', 'yellow']


for (let i = 0; i < box; i++) {
    const squares = document.createElement('div')
    squares.classList.add('box')

    squares.addEventListener('mouseover', () => setColor(squares))
    
    squares.addEventListener('mouseout', () => removeColor(squares))
 
    boxes.appendChild(squares)
}

function setColor(element) {
    const color = getRandomColor()
    // console.log(color)
    //this is to check if the colors are randomised and if it didnt work than there is something wrong with the function
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = `#1d1d1d`
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}