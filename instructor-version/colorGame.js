// initial number of squares for medium level
let numberOfColors = 6

// prepare an array of colors, according to the number of colors
let colors = colorSet(numberOfColors)

// decide the answer color from the color array
let answerColor = selectAnswerColor(numberOfColors)

// select all squares
let squares = document.querySelectorAll('.square')

// select bar message
let message = document.querySelector('#message')

// select the answer color display on <h1>
let questionDisplay = document.querySelector('#questionDisplay')

// select <h1> to change its background when correct
let h1 = document.querySelector('h1')

// select buttons with the reset button selected separately
let resetBtn = document.querySelector('#resetBtn')
let btn = document.querySelectorAll('.level')

// set a new game
reset()

// set normal procedure for clicking any square (for being correct or wrong)
for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function () {
		if (squares[i].style.backgroundColor === answerColor) {
			for (let i = 0; i < numberOfColors; i++) {
				squares[i].style.backgroundColor = answerColor
				h1.style.backgroundColor = answerColor
				message.textContent = 'Correct!!!'
				resetBtn.textContent = 'Play Again?'
			}
		} else {
			squares[i].style.backgroundColor = 'gray'
			message.textContent = 'Wrong...'
		}
	})
}

// set procedure for clicking level buttons
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
	btn[0].classList.remove('selected')
	btn[1].classList.remove('selected')
	btn[2].classList.remove('selected')
	btn[i].classList.add('selected')
    if (this.textContent === 'Easy') {
      	numberOfColors = 3
	} else if (this.textContent === 'Medium') {
      	numberOfColors = 6
    } else {
      	numberOfColors = 9
    } 
	reset()
  })
}

// set procedure for clicking reset button
resetBtn.addEventListener('click', function () {
	reset()	
})

// function for basic resetting (new color array + new answer color + display new answer + filling squares + message & reset button reset)
function reset () {
	colors = colorSet(numberOfColors)
	answerColor = selectAnswerColor(numberOfColors)
	questionDisplay.textContent = answerColor
	h1.style.backgroundColor = 'steelblue'
	fillSquares()
	message.textContent = ' '
	resetBtn.textContent = 'New Colors'
}

// fill squares according to the number of colors in the array, removing unnecessary squares
function fillSquares () {
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = 'none'
		}
	}
}

// select a new answer color from the color array
function selectAnswerColor (num) {
	let randomNumber = Math.floor(num * Math.random())
	return colors[randomNumber]
}

// form a new array of colors according to the given number of colors
function colorSet (num) {
	let colorArr = []
	for (let i = 0; i < num; i++) {
		colorArr.push(randomColor())
		}
	return colorArr
}

// create a random rgb color
function randomColor () {
	let color
	let r = Math.floor(256 * Math.random())
	let g = Math.floor(256 * Math.random())
	let b = Math.floor(256 * Math.random())
	color = `rgb(${r}, ${g}, ${b})`
	return color
}