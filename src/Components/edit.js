import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
    
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
            }
    }
    // Takes the ID from the record and apends it onto the URL 
    componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster,
                _id:response.data._id
            })
        
        })
        .catch();
    }
        handleSubmit(event){
            console.log(
                "Name: "+this.state.Title
                +"Year: "+this.state.Year
                +"Poster: "+this.state.Poster);
                event.preventDefault();
                this.setState({
                    Title: '',
                    Year: '',
                    Poster: ''
                });
                const newMovie = {
                    title: this.state.Title,
                    year: this.state.Year,
                    poster: this.state.Poster
                }

                // To prevent creating a new record we comment this out 

                axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
                .then((response)=> {console.log(response)})
                .catch();


        }
        onChangeMovieName(event){
            this.setState({
                Title: event.target.value
            })

        }

        onChangeYear(event){
            this.setState({
                Year: event.target.value
            })

        }

        onChangePoster(event){
            this.setState({
                Poster: event.target.value
            })

        }
        render(){
            return(
                <div>
                    <h2>This is my edit component </h2>
                    <form onSubmit={this.handleSubmit} >
                        {/* JSX code in here to field the input */}
                        <div className="form-group">
                            <label>Edit Movie Name:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Title}
                                onChange={this.onChangeMovieName}
                                
                                /> 
                       

                        </div>
                    
                        <div className="form-group">
                            <label>Edit Year:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Year}
                                onChange={this.onChangeYear}
                                
                                /> 


                        </div>

                        <div className="form-group">
                            <label>Edit Poster:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Poster}
                                onChange={this.onChangePoster}
                                
                                /> 

                        </div>
                        <div>
                            <input type="submit" value="Add "
                                className="btn  btn-primary"></input>
                        </div>
                    </form>

                </div>
            );
            
        }
}
export default Edit;