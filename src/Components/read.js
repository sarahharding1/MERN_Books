import React, { Component } from "react";
import Books from "./books";
import axios from "axios";

class Read extends Component {
  constructor() {
    super();
    this.ReloadData = this.ReloadData.bind(this); //Bind so the event works
  }

  ReloadData() {
    axios
      .get("http://localhost:4000/api/books")
      .then((response) => {
        //arrow function
        // allows us to set a state
        this.setState({ mybooks: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    // axios.get is called a promise
    axios
      .get("http://localhost:4000/api/books")
      .then((response) => {
        //arrow function
        // looking for an array that has books in it
        this.setState({ mybooks: response.data.books });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  state = {
    // 'state' used to represent data. stores JSON data
    books: []
   };
  // here we have the render method which is responsible for describing the view to be rendered to the browser window
  render() {
    return (
      <div>
        <h1>Read Component is in here</h1>
        <Books mybooks={this.state.books} ReloadData={this.ReloadData}></Books>
      </div>
    );
  }
}
export default Read;
