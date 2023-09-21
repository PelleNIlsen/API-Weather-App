import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className='flex'>
            <input
                className='rounded-l-lg p-4 border-t border-l mr-0 border-b border-1 text-gray-800 border-gray-200 bg-white'
                placeholder='Search...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className='px-8 rounded-r-lg bg-blue-400 text-white' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar