import React from "react";
import axios from "axios";
import SearchStyle from "./searchStyle.css";
import { Search } from 'react-bootstrap-icons';
import Books from "./books";


class SearchBar extends React.Component {

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

    
    
    render(placeholder, mybooks) {
        return (
          <div className="search" >
            <div className="searchInput" >
                <input type="text" placeholder="Enter a Book Name..." />
                <Search ></Search>
                <div className="searchIcon">
                </div>
            </div>
            <div className="dataResult">
            {/* {this.props.mybooks.map((book) => {
              return <a> {book.title}
              </a>
              ;})} */}
            </div>
            

            
          </div>
        );
        
      }
    


    
 }



export default SearchBar;