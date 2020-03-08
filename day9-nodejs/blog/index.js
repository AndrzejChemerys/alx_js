//importujemy moduły do naszego serwera

let express = require('express');
let bodyParser = require('body-parser');

//tworzymy obiekt aplikacji serwera z modułu express
let app = express();

//zdefiniowanie metod które będą wukorzystywane przez serwer

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//uruchomienie silnika szablonów dla modułu ejs
app.set('view engine', 'ejs');

//definicja ścieżki serwera
app.use(express.static(__dirname + '/'));

//uruchomienie serwera na porcie 8080
app.listen(8080);
console.log('Serwer pomyślnie uruchomiony na porcie 8080');

//tablica zawierajaca liste postow w postaci obiektow (literaly)

let posts = [];

app.get('/', function(req, res) {
	res.render('index', {posts: posts});
});

app.get('/insertPost', function(req, res) {
	res.render('insertPost');
});

app.post('/insertPost', function(req, res) {

	let obj = {
		title: req.body['title'],
		description: req.body['description']
	}

	posts.push(obj);

	res.render('index', {posts: posts});

});

app.get('/details/:id', function(req, res) {

	let id = req.params.id;
	res.render('details', {post: posts[id]});
});

app.get('/delete/:id', function(req, res) {

	let id = req.params.id;
	posts.splice(id, 1);
	res.render('index', {posts: posts});
});

app.get('/editPost/:id', function(req, res) {

	let id = req.params.id;

	res.render('editPost', {post: posts[id], id:id});
});

app.post('/editPost/:id', function(req, res) {
	let id = req.params.id;

	let obj = {
		title: req.body['title'],
		description: req.body['description']
	}

	posts[id] = obj;

	res.render('index', {posts: posts});

});