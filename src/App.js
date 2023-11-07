import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/dataSlice';
import logo from './statics/tituloPokemon.png';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import pokeBall from './statics/pokeBall.png';



function App() {
  const pokemons = useSelector((state) => state.data.pokemons);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, [dispatch]);

  return (
    <div className="bg-white m-0">
      <header className="p-6 flex flex-row justify-around m-">
        <img src={logo} alt="Pokedux" className='h-52' />
        <img src={pokeBall} alt="PokeBall" className='h-52 mr-10  hover:animate-bounce' />
      </header>
      <main className='flex flex-col'>
        <section>
          <Searcher />
        </section>

        <section>
          <div className='flex flex-col'> {loading ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="spinner"></div>
          </div>
        ) : (
          
          <PokemonList pokemons={pokemons} />
        )} 
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default App;