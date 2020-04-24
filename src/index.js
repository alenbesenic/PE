import express from 'express';


const app = express() 
const port = 3000 


app.get('/events', (req, res) => {
    res.send("Hello")
})
app.listen(port, () => console.log(`Slušam na portu ${port}!`))
