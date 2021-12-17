import React, { Component } from "react";
import BookItem from "./bookItem";

class Books extends Component {


  render() {
    // map pulls the bookArray array apart
    return this.props.mybooks.map((book) => { // arrow function
      return (
        <BookItem
        Books={book}
          // ReloadData={this.props.ReloadData}
          key={book._id}>

        </BookItem>
      ); // book._id is a unique identifier to avoid infinate loop
    });
  }
}

export default Books;
