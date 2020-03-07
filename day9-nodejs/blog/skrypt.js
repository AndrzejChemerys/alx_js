//importujemy moduły do naszego serwera

let express = require('express');
let bodyParser = require('body-parser');

//tworzymy obiekt aplikacji serwera z modułu express
let app = express();

//zdefiniowanie metod które będą wukorzystywane przez serwer

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//uruchomienie silnika szablonów dla modułu ejs
app.set('vie engine', 'ejs');

//uruchomienie serwera na porcie 8080
app.listen(8080);
console.log('Serwer pomyślnie uruchomiony na porcie 8080');