import React, { Component } from 'react';
import Books from './books';
import axios from 'axios';

class Read extends Component{


        constructor(){
            super();
            this.ReloadData = this.ReloadData.bind(this); //Bind so the event works
        }

        ReloadData(){
            axios.get('http://localhost:4000/api/books')
            .then((response)=>{ //arrow function
                // allows us to set a state
                this.setState({mybooks: response.data})
            })
            .catch((error)=>{
                console.log(error);
            });
        }

        componentDidMount() {
            // axios.get is called a promise
            axios.get('http://localhost:4000/api/books')
            .then((response)=>{ //arrow function
                // looking for an array that has books in it
                this.setState({mybooks: response.data.books})
            })
            .catch((error)=>{
                console.log(error);
            });
;        }
    //stores JSON data
    state = { // 'state' used to represent data. here we have an object, inside an array, which is inside an object.
        mybooks: [
            // ** Hardcoded data. Replaced using API and JSON data
            // {
            // "Title": "Captain America: Civil War",
            // "Year": "2016",
            // "imdbID": "tt3498820",
            // "Type": "movie",
            // "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg" },

            // {
            // "Title": "Charlie Wilson's War", 
            // "Year": "2007",
            // "imdbID": "tt0472062",
            // "Type": "movie",
            // "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg" },

            // {
            // "Title": "Avengers: Infinity War",
            // "Year": "2018",
            // "imdbID": "tt4154756",
            // "Type": "movie",
            // "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" }
        ]
    };
        // here we have the render method which is responsible for describing the view to be rendered to the browser window
        render(){
            return(
                <div>
                    <h1>Read Component is in here</h1>
                    <books films={this.state.mybooks} ReloadData={this.ReloadData}></books>
                </div>
            );
        }
}
export default Read;
