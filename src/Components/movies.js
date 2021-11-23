import React, { Component } from 'react';
import MovieItem from './movieItem';

class Movies extends Component{

    render(){
        
        return this.props.films.map((film)=>{ // arrow function
            return <MovieItem movie={film} ReloadData={this.props.ReloadData} key={film._id}></MovieItem> // film.imdbID is a unique identifier to avoid infinate loop
        })
        }
}

export default Movies;