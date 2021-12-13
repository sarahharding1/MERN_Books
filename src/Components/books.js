import React, { Component } from 'react';
import BookItem from './bookItem';

class Books extends Component{

    render(){
        
        return this.props.films.map((film)=>{ // arrow function
            return <BookItem movie={film} ReloadData={this.props.ReloadData} key={film._id}></BookItem> // film.imdbID is a unique identifier to avoid infinate loop
        })
        }
}

export default Books;