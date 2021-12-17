import React, { Component } from 'react';
import axios from 'axios';

class Edit extends React.Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.onChangeTheme = this.onChangeTheme.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    
        this.state = {
            Title: '',
            Year: '',
            Cover: '',
            Theme: '',
            Author: '',
            Rating: ''
            }
    }
    // Takes the ID from the record and apends it onto the URL 
    componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get('http://localhost:4000/api/books/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title:response.data.title,
                Year:response.data.year,
                Cover:response.data.cover,
                Theme:response.data.theme,
                Author:response.data.author,
                Rating:response.data.rating,
                _id:response.data._id
            })
        
        })
        .catch((error)=>{
            console.log(error);
        });
    }
        handleSubmit(event){
            console.log(
                "Name: "+this.state.Title
                +"Year: "+this.state.Year
                +"Cover: "+this.state.Cover
                +"Theme: "+this.state.Theme
                +"Author: "+this.state.Author
                +"Rating: "+this.state.Rating);
                event.preventDefault();
                this.setState({
                    Title: '',
                    Year: '',
                    Cover: '',
                    Theme: '',
                    Author: '',
                    Rating: ''
                });
                const newBook = {
                    title: this.state.Title,
                    year: this.state.Year,
                    cover: this.state.Cover,
                    theme: this.state.Theme,
                    author: this.state.Author,
                    rating: this.state.Rating,
                    _id: this.state._id
                }


                axios.put('http://localhost:4000/api/books/'+this.state._id, newBook)
                .then((res)=> 
                    {console.log(res.data)
                    })
                .catch((error)=>{
                    console.log(error);
                });


        }
        onChangeBookName(event){
            this.setState({
                Title: event.target.value
            })

        }

        onChangeYear(event){
            this.setState({
                Year: event.target.value
            })

        }

        onChangeCover(event){
            this.setState({
                Cover: event.target.value
            })

        }

        onChangeTheme(event){
            this.setState({
                Theme: event.target.value
            })

        }

        onChangeAuthor(event){
            this.setState({
                Author: event.target.value
            })

        }

        onChangeRating(event){
            this.setState({
                Rating: event.target.value
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
                                onChange={this.onChangeBookName}
                                
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
                            <label>Edit Cover:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Cover}
                                onChange={this.onChangeCover}
                                
                                /> 

                        </div>

                        <div className="form-group">
                            <label>Edit Theme:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Theme}
                                onChange={this.onChangeTheme}
                                
                                /> 

                        </div>

                        <div className="form-group">
                            <label>Edit Author:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Author}
                                onChange={this.onChangeAuthor}
                                
                                /> 

                        </div>

                        <div className="form-group">
                            <label>Edit Rating:  </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.Rating}
                                onChange={this.onChangeRating}
                                
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