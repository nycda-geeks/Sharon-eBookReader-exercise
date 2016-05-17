// in books.json: make an array with objects which are the books
// for each book: list the url to picture, title and text

// in Jade: show a list of all objects > books, same height, 
// then load one of the objects, chosen by click
// then show 1. large picture, 2. title, 3. text
// the 1. large pic should display within a div block below the thumbnails

// in app.js: first load express, fs, body-parser
// install them first in the folder with git bash
// parse data and load img in a function that can be called upon


var fs = require ('fs')
var express = require ('express')
var bodyparser = require ('body-parser')

var app = express()
app.set('views', './src/views')
app.set('view engine', 'jade')


