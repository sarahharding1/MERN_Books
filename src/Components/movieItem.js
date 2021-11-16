import React, { Component } from "react";
import Movies from "./movies";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

class MovieItem extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <h3>{this.props.movie.title}</h3>
              <img src={this.props.movie.poster}></img>
              <p>{this.props.movie.year}</p>
              <footer className="blockquote-footer">
                All rights reserved <cite title="Source Title">Marvel Studios</cite>
              </footer>
            </blockquote>
          </Card.Body>
          <Link to={"/edit/" +this.props.movie._id} className="btn btn-primary">Edit</Link>
        </Card>
      </div>
    );
  }
}
export default MovieItem;
