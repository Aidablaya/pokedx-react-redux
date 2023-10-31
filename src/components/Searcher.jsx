//import { useState } from 'react';
import { Search } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setFilteredPokemons } from '../slices/searchSlice';

const Searcher = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.data.pokemons);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearchQuery(searchTerm));
    dispatch(setFilteredPokemons({ pokemons, searchQuery: searchTerm }));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Search size={20} />
        </div>
        <input
          type="text"
          className="flex items-center mb-3 p-2 pl-10 pr-3 border-2 border-black-500 w-64 rounded-lg"
          placeholder="Buscar Pokemon"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Searcher;