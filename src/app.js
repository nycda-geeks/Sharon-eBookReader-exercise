// in books.json: make an array with objects which are the books
// for each book: list the url to picture, title and text

// in Jade: show a list of all objects > books, same height, 
// then load one of the objects, chosen by click
// then show 1. large picture, 2. title, 3. text
// the 1. large pic should display within a div block below the thumbnails

// in app.js: first load express, fs, body-parser
// install them first in the folder with git bash
// parse data and load img in a function that can be called upon

// !!
// Get book images
// Tell express to use a static folder
// Make script to control DOM and do AJAX
// DOM: listen for clicks
// AJAX: Get book details
// Create book API


var express = require ('express')
var bodyparser = require ('body-parser')
var fs = require ('fs')

var app = express()
app.set('views', './src/views')
app.set('view engine', 'jade')

app.use(express.static('./resources'))

app.get('/', (req,res) => {

	fs.readFile('./resources/books.json', function(error, data){
		if(error) {
			throw error
		} else {
			var parsedBooks = JSON.parse(data)
			console.log( parsedBooks )
			res.render('index', { allBooks : parsedBooks })
		}
	})

})

app.get('/api', (req, res) => {
	var booktitle = req.query.title
	var bookmatch = {}
	fs.readFile( './resources/books.json', function(error,data) {
		if (error) {
			throw error
		} else {
			var parsedBooks = JSON.parse(data)
			console.log(parsedBooks)
			for (var i = 0; i < parsedBooks.length; i++ ){
				if ( parsedBooks[i].title == booktitle ) {
					bookmatch = parsedBooks[i]
				}
			}
			res.send( bookmatch )
		}
	})
})


var server = app.listen(3000, function () {
	console.log('User info app listening on port: ' + server.address().port);
});



