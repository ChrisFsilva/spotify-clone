import React, { useState } from 'react';
import search from '../assets/icons/search.png';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('../../api-artists/artists.json');
      const data = await response.json();
      const filteredResults = data.filter((artist) =>
        artist.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Erro ao buscar artistas:', error);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="header_search">
        <img src={search} alt="" />
        <input
          value={searchValue}
          onChange={handleSearchChange}
          id="search-input"
          type="text"
          maxLength="800"
          placeholder="o que você quer ouvir?"
        />
      </div>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((artist) => (
            <li key={artist.id}>
              <img src={artist.urlImg} alt={artist.name} />
              <span>{artist.name}</span>
              <span>{artist.genre}</span>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;