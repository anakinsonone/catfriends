import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input className="tc pa3 ba b--green bg-light-pink" type="search" placeholder="Search Cats" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;