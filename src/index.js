import dotenv from 'dotenv'
dotenv.config();

const express = require('express');
const data = require('./memory')
const cors = require('cors')
const path = require('path')
import connect from './database'
import mongo from "mongodb"
import auth from './auth'



const app = express()

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
//autentifikacija
app.get('/tajna',[auth.verify], (req, res) =>{
    

    res.json({message: 'Ovo je tajna' + req.jwt.username})
})
app.post('/auth', async (req, res) =>{
    let user = req. body;
   try {
    let result = await auth.authenticateUser(user.username, user.password);
    res.json(result);
   }
   catch (e){
    res.status(403).json({error: e.message});
   }
});

app.post("/users", async (req, res)=> {
    let userData = req.body;
    let id; 
    try{
    id = await auth.registerUser(userData)
    } catch(e){
        res.status(500).json({error: e.message});
    }
    res.json({id: id})
})

//svi eventi
app.get('/events', async(req, res) => {
    let db = await connect();
    let query = req.query

    //Za otkazane evente
    if (query.status) {
        let canceledEvents = await db.collection("Events").find({ Status: query.status })
        let cEvents = await canceledEvents.toArray()

        res.json(cEvents)
    }
    //Za nadolazeće evente
    else if (query.date) {
        let upcomingEvents = await db.collection("Events").find({ Date_Start: { $gte: Date.now() } })
        let uEvents = await upcomingEvents.toArray()

        res.json(uEvents)
    } else {
        let cursor = await db.collection("Events").find()
        let results = await cursor.toArray()

        res.json(results)
    }
})

//za dohvat jednog eventa
app.get('/events/:id', async(req, res) => {
    let id = req.params.id

    let db = await connect()

    let doc = await db.collection("Events").findOne({ _id: mongo.ObjectId(id) })

    res.json(doc)
})

//kategorije
app.get('/category', (req, res) => res.json(data.Category))

app.get('/category/outdoor', async(req, res) => {
    let db = await connect()

    let cursor = await db.collection("Events").find({ Category: "Outdoor" })
    let results = await cursor.toArray()

    res.json(results)
})

app.get('/category/nightlife', async(req, res) => {
    let db = await connect()

    let cursor = await db.collection("Events").find({ Category: "NightLife" })
    let results = await cursor.toArray()

    res.json(results)
})

app.get('/category/library', async(req, res) => {
    let db = await connect()

    let cursor = await db.collection("Events").find({ Category: "Library" })
    let results = await cursor.toArray()

    res.json(results)
})

//Hosting
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(path.join(__dirname, "../public")))

    // Handle SPA
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
    });
}

app.listen(process.env.PORT || port, () => console.log(`Slušam na portu ${port}!`))