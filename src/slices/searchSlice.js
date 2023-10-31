import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: '',
  filteredPokemons: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilteredPokemons: (state, action) => {
      const { pokemons, searchQuery } = action.payload;
      state.filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
});

export const { setSearchQuery, setFilteredPokemons } = searchSlice.actions;

export default searchSlice.reducer;