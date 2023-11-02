import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  filteredPokemons: [], // Inicializar con un array vacío
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

      if (pokemons) {
        state.filteredPokemons = pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
      } else {
        state.filteredPokemons = [];
      }
    },
  },
});

export const { setSearchQuery, setFilteredPokemons } = searchSlice.actions;

export default searchSlice.reducer;