const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// Parse app
app.use(bodyParser.urlencoded({ extended: false }))

// Parse app/json
app.use(bodyParser.json())

// Connect to our mongoDB
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.wynng.mongodb.net/movies?retryWrites=true&w=majority'; // Connection string from MongoDB. Replaced password and database name.
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;


// Creating a Schema to tell the database what to store in document
var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

// Movie model allows me to write data into a database. Can store multiple models.
var MovieModel = mongoose.model("movie", movieSchema);


//Listening for a Delete request
app.delete('/api/movies/:id', (req,res)=>{
    console.log('deleting: '+req.params.id);


    MovieModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
            res.send(error);
            res.send(data);
        })
})

//Listening for a put request
 app.put('/api/movies/:id', (req, res) => {
     console.log("Updating: "+req.params.id);
     MovieModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, //pass to database and update
         (err,data)=>{
             res.send(data);
         })
 })

// Defining an 'ID' parameter. Looking for a movie with that ID in the Url
app.get('/api/movies/:id', (req,res) =>{
    console.log(req.params.id);


    // Returns a movie with that ID
    MovieModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})



app.get('/api/movies', (req, res)=>{
    // REMOVED JSON. NO NEED TO HARDCODE JSON DATA
   
    MovieModel.find((err, data)=>{
        res.json(data);
    })

    // REMOVED STATUS MESSAGE

})

app.post('/api/movies', (req, res) =>{
    console.log('movie received');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
    
    
    MovieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
    })

    res.send('Item Added');

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})