import express from 'express';


const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati



app.get('/', (req, res) => res.send('Hello World, ovaj puta preko browsera!'))
app.get('/student', (req, res) => res.send('Ruta za studente...'))
app.get('/primjer/student', (req, res) => res.send('Ugnježdena ruta'))




app.listen(port, () => console.log(`Slušam na portu ${port}!`))