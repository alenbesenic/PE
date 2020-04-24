import express from 'express';
import data from './memory'


const app = express() 
const port = 3000 


app.get('/events', (req, res) => {
    res.json(data.event)
})
app.get('/category', (req, res)=>res.json(data.Category))
app.get('/category/outdoor', (req, res)=>res.json(data.Category.Outdoor))
app.get('/category/nightlife', (req, res)=>res.json(data.Category.NightLife))
app.listen(port, () => console.log(`Slušam na portu ${port}!`))
