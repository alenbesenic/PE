const express = require('express');
const data = require('./memory')
const cors = require('cors')
const path = require('path')
import connect from './database'


const app = express()

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

//svi eventi
app.get('/events', async(req, res) => {
    let db = await connect();

    let cursor = await db.collection("Events").find()
    let results = await cursor.toArray()

    res.json(results)
})


//kategorije
app.get('/category', (req, res) => res.json(data.Category))
app.get('/category/outdoor', (req, res) => res.json(data.Category.Outdoor))
app.get('/category/nightlife', (req, res) => res.json(data.Category.NightLife))
app.get('/category/library', (req, res) => res.json(data.Category.Library))

//otkazani eventi
app.get('/canceledEvents', (req, res) => {
    let canceled = []
    for (var item of data.event) {
        if (item.Status === 'Canceled') {
            canceled.push(item)
        }
    }
    res.json(canceled)
})

//nadolazeći eventi po datumima
app.get('/upcomingEvents', (req, res) => {
    let podaci = data.event
    podaci.sort((a, b) => {
        if (a.Date > b.Date) {
            return 1;
        }
        if (a.Date < b.Date) {
            return -1;
        }
        return 0;
    })
    res.json(podaci)
})

//za dohvat jednog eventa
app.get('/events/:id', (req, res) => {
    let id = req.params.id
    let doc = data.event
    for (var item of doc) {
        if (id == item.id) {
            res.json(item)
        }
    }
})



if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(path.join(__dirname, "../public")))

    // Handle SPA
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    });
}

app.listen(process.env.PORT || port, () => console.log(`Slušam na portu ${port}!`))