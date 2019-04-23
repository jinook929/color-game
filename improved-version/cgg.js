var numOfColors = 6
var colors = colorsGenerator(numOfColors)
var answerSquare = colors[pickAnswer(numOfColors)]

var rgbQuestion = document.querySelector('#rgbQuestion')
rgbQuestion.textContent = answerSquare

var squares = document.querySelectorAll('.square')
newColors()

var message = document.querySelector('#message')
var h1 = document.querySelector('h1')

var resetBtn = document.querySelector('#resetBtn')
var easyBtn = document.querySelector('#easyBtn')
var mediumBtn = document.querySelector('#mediumBtn')
var hardBtn = document.querySelector('#hardBtn')

for (var i = 0; i < squares.length; i++) {
squares[i].addEventListener('click', function () {
if (this.style.background.includes('rgb')) {
	if(this.style.background === answerSquare) {
		message.textContent = 'Correct!!!'
		for (var i = 0; i < numOfColors; i++) {
			squares[i].style.background = answerSquare
			h1.style.background = answerSquare
			resetBtn.textContent = 'Play Again?'
		}
	} else {
		this.style.background = '#232323'
		message.textContent = 'Wrong...'
	}
} else {}
})
}

resetBtn.addEventListener('click', function () {
	colors = colorsGenerator(numOfColors)
	answerSquare = colors[pickAnswer(numOfColors)]
	rgbQuestion.textContent = answerSquare
	newColors()
	h1.style.background = 'steelblue'
	message.textContent = ''
	resetBtn.textContent = 'New Colors'
})

easyBtn.addEventListener('click', function () {
	easyBtn.classList.add('selected')
	mediumBtn.classList.remove('selected')
	hardBtn.classList.remove('selected')
	numOfColors = 3
	colors = colorsGenerator(numOfColors)
	answerSquare = colors[pickAnswer(numOfColors)]
	rgbQuestion.textContent = answerSquare
	h1.style.background = 'steelblue'
	answerSquare = colors[pickAnswer(numOfColors)]
	message.textContent = ''
	resetBtn.textContent = 'New Colors'
	newColors()
})

mediumBtn.addEventListener('click', function () {
	easyBtn.classList.remove('selected')
	mediumBtn.classList.add('selected')
	hardBtn.classList.remove('selected')
	numOfColors = 6
	colors = colorsGenerator(numOfColors)
	answerSquare = colors[pickAnswer(numOfColors)]
	rgbQuestion.textContent = answerSquare
	h1.style.background = 'steelblue'
	message.textContent = ''
	resetBtn.textContent = 'New Colors'
	newColors()
})

hardBtn.addEventListener('click', function () {
	easyBtn.classList.remove('selected')
	mediumBtn.classList.remove('selected')
	hardBtn.classList.add('selected')
	numOfColors = 9
	colors = colorsGenerator(numOfColors)
	answerSquare = colors[pickAnswer(numOfColors)]
	rgbQuestion.textContent = answerSquare
	h1.style.background = 'steelblue'
	message.textContent = ''
	resetBtn.textContent = 'New Colors'
	newColors()
})

function newColors() {
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i]
		} else {
			squares[i].style.background = 'none'
		}		
	}
}


function pickAnswer(num) {
	var pick = Math.floor(num * Math.random())
// console.log(pick)
		return pick
}

function colorsGenerator(num) {
	var arr = []
	for(var i = 0; i < num; i++) {
		arr.push(rgbGenerator())
	}
	return arr
}

function rgbGenerator() {
	var r = Math.floor(256 * Math.random())
	var g = Math.floor(256 * Math.random())
	var b = Math.floor(256 * Math.random())
	return `rgb(${r}, ${g}, ${b})`
}