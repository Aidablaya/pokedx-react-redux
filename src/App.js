import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/pokemon.jpg';
import './App.css';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/dataSlice';

function App() {
 
    const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
    //.getIn(['data', 'pokemons'], shallowEqual)).toJS();
    const loading = useSelector((state) => state.ui.loading);
    
    const dispatch = useDispatch();
    
  useEffect(()=>{
    dispatch(fetchPokemonWithDetails())
  },[dispatch])

  return (
    <div className="bg-black">
      <header className='m-6'>
        <img src={logo} alt="Pokedux" className='m-6' />
      </header>
      <main >
        <Searcher />
      </main>
      {loading ? <Col  offset={12}>
        <Spin spinning size='large'/>
      </Col> : <PokemonList pokemons={pokemons}/>}
      
      
    </div>
  );
}


export default App;
