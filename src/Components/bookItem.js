import React, { Component } from "react";
import Books from "./books";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class BookItem extends Component {
  
  constructor() {
    super();
    this.DeleteBook = this.DeleteBook.bind(this);
  }

  DeleteBook() {
    console.log("Delete: " + this.props.book._id);

    axios
      .delete("http://localhost:4000/api/books/" + this.props.book._id)
      .then(() => {
        this.props.ReloadData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h3>{this.props.book.Title}</h3>
              <img src={this.props.book.Cover}></img>
              <p>{this.props.book.Year}</p>
              <footer className="blockquote-footer">
                All rights reserved{" "}
                <cite title="Source Title">Marvel Studios</cite>
              </footer>
            </blockquote>
          </Card.Body>
          {/* link to change the URL to the doccument ID */}
          <Link to={"/edit/" + this.props.book._id} className="btn btn-primary">
            Edit
          </Link>
          <Button variant="danger" onClick={this.DeleteBook}>
            Delete
          </Button>
        </Card>
      </div>
    );
  }
}
export default BookItem;
