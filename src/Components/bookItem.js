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
    console.log("Delete: " + this.props.Books._id);

    axios
      .delete("http://localhost:4000/api/books/" + this.props.Books._id)
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
              <h3>{this.props.Books.title}</h3>
              <img src={this.props.Books.cover}></img>
              <p>{this.props.Books.theme}</p>
              <p>{this.props.Books.year}</p>
              <p>{this.props.Books.author}</p>
              <p>{this.props.Books.rating}</p>
            </blockquote>
          </Card.Body>
          {/* link to change the URL to the doccument ID */}
          <Link to={"/edit/" + this.props.Books._id} className="btn btn-primary">
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
