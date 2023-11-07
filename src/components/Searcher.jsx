import { Search } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../slices/searchSlice';
import PokemonList from './PokemonList'; // Asegúrate de importar correctamente

const Searcher = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.data.pokemons);
  const searchQuery = useSelector((state) => state.search.searchQuery);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    dispatch(setSearchQuery(searchTerm));
  };

  // Filtra los pokemons en función de la búsqueda
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center pt-6">
      <div className="relative bg-black w-screen flex items-center justify-center">
        
        <div className=" flex items-center pointer-events-none justify-center w-10">
          <Search size={20} color='white' />
        </div>
        

        <input
          type="text"
          className="p-2 pl-4 pr-3 border-2 border-black w-64 rounded-lg bg-white text-black"
          placeholder="Buscar Pokemon "
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div>
        <PokemonList pokemons={filteredPokemons} />
      </div>
    </div>
  );
};

export default Searcher;
