import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
    
        this.state = {
            Title: '',
            Year: '',
            Cover: ''
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
                Cover:response.data.Cover,
                _id:response.data._id
            })
        
        })
        .catch();
    }
        handleSubmit(event){
            console.log(
                "Name: "+this.state.Title
                +"Year: "+this.state.Year
                +"Cover: "+this.state.Cover);
                event.preventDefault();
                this.setState({
                    Title: '',
                    Year: '',
                    Cover: ''
                });
                const newBook = {
                    title: this.state.Title,
                    year: this.state.Year,
                    Cover: this.state.Cover
                }

                // To prevent creating a new record we comment this out 

                axios.put('http://localhost:4000/api/books/' + this.state._id, newBook)
                .then((response)=> {console.log(response)})
                .catch();


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