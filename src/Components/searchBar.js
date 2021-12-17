import React from "react";


class SearchBar extends React.Component {

    
    render(placeholder, data) {
        return (
          <div className="search" >
            <div className="searchInput" >
                <input type="text" placeholder="Enter Book Name..."/>
                <div className="searchIcon"></div>
            </div>
            <div className="dataResult"></div>
            
          </div>
        );
      }
 }


export default SearchBar;