import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const searchText = 'search';
    const searchStyle = {
        fontSize: '20px'
    }
    return (
        <input
            type='text'
            className="form-control search-input"

            style={searchStyle}
            placeholder={searchText}
        />
    );
};

export default SearchPanel;