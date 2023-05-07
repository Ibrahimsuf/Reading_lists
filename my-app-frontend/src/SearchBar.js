import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  const [searchString, setSearchString] = useState(props.search_string);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      props.methodName1(searchString);
    }
  }

  const handleChange = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <div class="col-lg-6 col-md-8 col-sm-12">
        <div class="input-group rounded w-50px" >
            <input
            type="search"
            class="form-control rounded text-start"
            placeholder="Search"
            aria-label="Search" 
            aria-describedby="search-addon" 
            value={searchString}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            />
        </div>
    </div>
  );
}

SearchBar.propTypes = {
  search_string: PropTypes.string.isRequired,
  methodName1: PropTypes.func.isRequired
};

export default SearchBar;
