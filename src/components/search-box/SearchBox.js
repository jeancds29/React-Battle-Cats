import React from "react";

import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="search battle cat"
        onChange={props.onSearchChange}
      />
    </div>
  );
};

export default SearchBox;




