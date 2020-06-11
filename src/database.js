const mongo = require("mongodb")

let connection_string = "mongodb+srv://admin:admin@cluster0-sep1a.mongodb.net/test?retryWrites=true&w=majority"

let client = new mongo.MongoClient(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = null

export default () => {
    return new Promise((resolve, reject) => {

        if (db && client.isConnected()) {
            resolve(db)
        } else {
            client.connect(err => {
                if (err) {
                    reject("Došlo je do greške prilikom spajanja", err)
                } else {
                    console.log("Uspješno spajanje na bazu")
                    db = client.db("PulaEvents")
                    resolve(db)
                }
            })
        }
    })
}