import { useDispatch } from 'react-redux';
import StarButton from './StarButton';
import { setFavorite } from '../slices/dataSlice';
import grassIcon from '../statics/grass.png';
import fireIcon from '../statics/fire.png';
import waterIcon from '../statics/water.png';
import bugIcon from '../statics/bug.png';
import flyIcon from '../statics/fly.png';
import poisonIcon from '../statics/poison.png';
import electricIcon from '../statics/electric.png';
import groundIcon from '../statics/ground.png';
import fairyIcon from '../statics/fairy.png';


const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(', ');

  //convertir letra del nombre en mayus
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  //color de fondo imge
  const determineBackgroundColor = () => {
    for (const type of types) {
      if (type.type.name === 'grass') {
        return 'bg-green-300'; 
      }
      if (type.type.name === 'fire') {
        return 'bg-red-300'; 
      }
      if (type.type.name === 'water') {
        return 'bg-blue-300'; 
      }
      if (type.type.name === 'bug') {
        return 'bg-green-500'; 
      }
      if (type.type.name === 'normal') {
        return 'bg-orange-200'; 
      }
      if (type.type.name === 'poison') {
        return 'bg-purple-400'; 
      }
      if (type.type.name === 'electric') {
        return 'bg-yellow-300'; 
      }
      if (type.type.name === 'ground') {
        return 'bg-stone-400'; 
      }
      if (type.type.name === 'fairy') {
        return 'bg-red-100'; 
      }
    }
    return ''; 
  };

  const determineIconeType = () => {
    for ( const type of types) {
      if (type.type.name === 'grass'){
        return grassIcon
      }
      if (type.type.name === 'fire'){
        return fireIcon
      }
      if (type.type.name === 'water'){
        return waterIcon
      }
      if (type.type.name === 'bug'){
        return bugIcon
      }
      if (type.type.name === 'flying'){
        return flyIcon
      }
      if (type.type.name === 'poison'){
        return poisonIcon
      }
      if (type.type.name === 'electric'){
        return electricIcon
      }
      if (type.type.name === 'ground'){
        return groundIcon
      }
      if (type.type.name === 'fairy'){
        return fairyIcon
      }
    }
  }
  const iconType = determineIconeType();
  const backgroundColor = determineBackgroundColor();
  const capitalizedName = capitalizeFirstLetter(name);

  return (
    <div className="flex flex-col justify-center items-center max-w-sm w-60 h-fit overflow-hidden rounded-lg shadow-lg border-solid border-8 border-stone-950 m-2 ">
        <header className='flex flex-row justify-between w-full'>
          <div className="font-bold text-base mb-2 m-1 ml-4">{capitalizedName}</div>
          {iconType && <img src={iconType} alt="Icon" className='w-5 h-5 mb-2 m-1' />}
        </header>
        <main className={`${backgroundColor} w-48 h-40 border-4 border-x-zinc-300 border-y-zinc-400`}>
          <img className="w-full" src={image} alt={name} />
        </main>
        <div className="w-52 py-0.5 bg-slate-300 rounded-lg">
          
          <p className="text-gray-700 text-base text-center">{typesString}</p>
        </div>
        <div className="px-6 py-4">
          <StarButton isFavorite={favorite} onClick={handleOnFavorite} />
        </div>
      
    </div>
  );
};

export default PokemonCard;
