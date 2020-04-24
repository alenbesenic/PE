import express from 'express';


const app = express() 
const port = 3000 


app.get('/events', (req, res) => {
    
})
app.listen(port, () => console.log(`Slušam na portu ${port}!`))
