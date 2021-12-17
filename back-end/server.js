const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");  

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

const mongoose = require('mongoose');

// passes data into the terminal and up to API
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
const myConnectionString = 'mongodb+srv://admin:ZqH58a$8@cluster0.shzjz.mongodb.net/books?retryWrites=true&w=majority'; // Connection string from MongoDB. Replaced password and database name.
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;


// Creating a Schema to tell the database what to store in document
var bookSchema = new Schema({
    title:String,
    year:String,
    cover:String,
    theme:String,
    author:String,
    rating:String
});

// book model allows me to write data into a database. Can store multiple models.
var bookModel = mongoose.model("book", bookSchema);


//Listening for a Delete request
app.delete('/api/books/:id', (req,res)=>{
    console.log('deleting: '+req.params.id);


    bookModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
            res.send(error);
            res.send(data);
        })
})

//Listening for a put request
 app.put('/api/books/:id', (req, res) => {
     console.log("Updating: "+req.params.id);
     bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, //pass to database and update
         (err,data)=>{
             res.send(data);
         })
 })

// Defining an 'ID' parameter. Looking for a book with that ID in the Url
app.get('/api/books/:id', (req,res) =>{
    console.log(req.params.id);


    // Returns a book with that ID
    bookModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})



app.get('/api/books', (req, res)=>{

   // finds all records in the databases and sends back the JSON data
    bookModel.find((err, data)=>{
        res.json(data);
    })

})

app.post('/api/books', (req, res) =>{
    console.log('book received');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.cover);
    console.log(req.body.theme);
    console.log(req.body.author);
    console.log(req.body.rating);
    
    
    bookModel.create({
        title: req.body.title,
        year: req.body.year,
        cover: req.body.cover,
        theme: req.body.theme,
        author: req.body.author,
        rating: req.body.rating
    })

    res.send('Item Added');

})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})