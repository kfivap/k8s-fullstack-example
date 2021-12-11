const app = require('express')()
const { json } = require('express')
const MongoClient = require("mongodb").MongoClient;
const PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI || 'localhost:27017/'
console.log({DB_URI})
const mongoClient = new MongoClient("mongodb://"+DB_URI);

let dbClient;
 
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.dbClient = client.db("mydb")

});

app.use(json())

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

app.get('/api/users', async (req, res) => {
    const db = req.app.locals.dbClient;
    const users = await db.collection('users').find().toArray()
    res.send({data: users})
})

app.post('/api/users', async (req, res)=>{
    const db = req.app.locals.dbClient;
    await db.collection('users').insert(req.body.user)
    res.sendStatus(201)
})


app.listen(PORT, ()=>{
    console.log('app listen on', PORT)
})