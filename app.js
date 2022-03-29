const board = document.querySelector('#board')
const colors = ['#e76d3c', '#ad44a8', '#34b4db', '#e6d922', '#2ecc55']
const SECTIONS_NUMBER = 6
const SQUARES_NUMBER = 100

for (let i = 0; i < SECTIONS_NUMBER; i++) {
    const section = document.createElement('div')
    section.classList.add('section')

    section.addEventListener('mouseenter', () => {   //mouseover cрабатывает при каждом переходе между вложенными эл-тами
        setColorSection(section, getRandomColor())
    })
    section.addEventListener('mouseleave', () => {
        removeColorSection(section)
    })

    board.append(section)
}

const sections = document.querySelectorAll('.section')

sections.forEach((section) => {
    for (let i = 0; i < SQUARES_NUMBER; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
    
        square.addEventListener('mouseover', () => {
            setColor(square, getRandomColor())
        })
        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })
    
        section.append(square)
    }
})

function setColor(element, color) {
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function setColorSection(element, color) {
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColorSection(element) {
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}