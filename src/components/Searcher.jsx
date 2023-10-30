
import { Search } from 'react-feather';


const Searcher = () => {
  

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
        />
      </div>
    </div>
  );
};

export default Searcher;