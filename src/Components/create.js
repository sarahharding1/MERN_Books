import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component{

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
                axios.post('http://localhost:4000/api/movies', newMovie)
                .then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err)
                });


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
                    
                    <form onSubmit={this.handleSubmit} >
                        {/* JSX code in here to field the input */}
                        <div className="form-group">
                            <label>Add Movie Name:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Title}
                                onChange={this.onChangeMovieName}
                                
                                /> 
                       

                        </div>
                    
                        <div className="form-group">
                            <label>Add Year:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Year}
                                onChange={this.onChangeYear}
                                
                                /> 


                        </div>

                        <div className="form-group">
                            <label>Add Poster:  </label>
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
export default Create;