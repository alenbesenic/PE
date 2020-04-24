import express from 'express';
import data from './memory'


const app = express() 
const port = 3000 


app.get('/events', (req, res) => {
    res.json(data.event)
})
app.get('/category', (req, res)=>res.json(data.Category))
app.get('/category/:category/outdoor', (req, res)=>res.json(data.Category.Outdoor))
app.listen(port, () => console.log(`Slušam na portu ${port}!`))
