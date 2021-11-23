import React, { Component } from "react";
import Movies from "./movies";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class MovieItem extends Component {

  constructor(){
    super();
    this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(){
      console.log("Delete: "+this.props.movie._id);

      axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
      .then(()=>{
        this.props.ReloadData();
      })
      .catch();
    }

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
          <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
        </Card>
      </div>
    );
  }
}
export default MovieItem;
