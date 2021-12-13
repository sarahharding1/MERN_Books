import React, { Component } from 'react';
import BookItem from './bookItem';

class Books extends Component{

    render(){
        // map pulls the collection apart
        return this.props.mybooks.map( (book)=>{ // arrow function
            return <BookItem book={BookItem} ReloadData={this.props.ReloadData} key={book._id}></BookItem> // film.imdbID is a unique identifier to avoid infinate loop
        })
        }
}

export default Books;