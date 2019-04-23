// initial number of squares for medium level
let numberOfColors = 6

// prepare an array of colors, according to the number of colors
let colors = colorSet(numberOfColors)

// decide the answer color from the color array
let answerColor = selectAnswerColor(numberOfColors)

// select all squares
let squares = $('.square')

// select bar message
let message = $('#message')

// select the answer color display on <h1>
let questionDisplay = $('#questionDisplay')

// select <h1> to change its background when correct
let h1 = $('h1')

// select buttons with the reset button selected separately
let resetBtn = $('#resetBtn')
let btn = $('.level')

// set a new game
reset()

// set normal procedure for clicking any square (for being correct or wrong)
squares.on('click', function () {
	if ($(this).css('backgroundColor') === answerColor) {
		squares.css('backgroundColor', answerColor)
		h1.css('backgroundColor', answerColor)
		message.text('Correct!!!')
		resetBtn.text('Play Again?')
	} else {
		$(this).css('backgroundColor', 'gray')
		message.text('Wrong...')
	}
})

// set procedure for clicking level buttons
 btn.on('click', function () {
	btn[0].classList.remove('selected')
	btn[1].classList.remove('selected')
	btn[2].classList.remove('selected')
	$(this).addClass('selected')
    if ($(this).text() === 'Easy') {
      	numberOfColors = 3
	} else if ($(this).text() === 'Medium') {
      	numberOfColors = 6
    } else {
      	numberOfColors = 9
    } 
	reset()
 })

// set procedure for clicking reset button
resetBtn.on('click', function () {
	reset()	
})

// function for basic resetting (new color array + new answer color + display new answer + filling squares + message & reset button reset)
function reset () {
	colors = colorSet(numberOfColors)
	answerColor = selectAnswerColor(numberOfColors)
	questionDisplay.text(answerColor)
	h1.css('backgroundColor', 'steelblue')
	fillSquares()
	message.text(' ')
	resetBtn.text('New Colors')
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
	console.log(randomNumber)
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