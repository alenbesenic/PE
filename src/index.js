const express = require ('express')
const data = require ('./memory')
const cors = require ('cors')


const app = express() 
const port = process.env.PORT || 15102

app.use(cors())
app.use(express.json())

//svi eventi
app.get('/events', (req, res) => {
    res.json(data.event)
})


//kategorije
app.get('/category', (req, res)=>res.json(data.Category))
app.get('/category/outdoor', (req, res)=>res.json(data.Category.Outdoor))
app.get('/category/nightlife', (req, res)=>res.json(data.Category.NightLife))
app.get('/category/library', (req, res)=>res.json(data.Category.Library))

//otkazani eventi
app.get('/canceledEvents', (req,res)=>{
    let canceled = []
    for(var item of data.event){
        if(item.Status === 'Canceled'){
            canceled.push(item)
        }
    }
    res.json(canceled)
})

//nadolazeći eventi po datumima
app.get('/upcomingEvents', (req, res)=>{
    let podaci = data.event
    podaci.sort((a, b)=>{
        if(a.Date>b.Date){
            return 1;
        }
        if(a.Date<b.Date){
            return -1;
        }
        return 0;
    })
    res.json(podaci)
})

//za dohvat jednog eventa
app.get('/events/:id', (req, res)=>{
    let id = req.params.id
    let doc = data.event
    for(var item of doc){
        if(id==item.id){
            res.json(item)
        }
    }
})

//Production
if(process.env.NODE_ENV === 'producton'){
    app.use(express.static(__dirname + '/public/'));

  
}

app.listen(port, () => console.log(`Slušam na portu ${port}!`))
