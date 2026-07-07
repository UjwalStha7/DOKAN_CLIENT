import { Link } from 'react-router-dom';
import construction from '../../media/construction.png';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-[#a2ccfe] text-white flex flex-col items-center justify-start pt-2 text-center font-andis font-extrabold">
      <h1 className="text-5xl md:text-6xl mb-2">
        OOPS!
      </h1>
      <h3 className="text-2xl md:text-3xl font-bold mb-2">
        WEBSITE UNDER CONSTRUCTION
      </h3>
      <p className="text-1xl md:text-1xl mb-4">
        We're working on it!
      </p>
      <div className="w-full max-w-3xl ">
        <img 
          src={construction} 
          alt="Under development" 
          className="w-full h-40 md:h-70 object-contain"
        />
      </div>
      <Link to="/" className="px-8 py-4 bg-white text-[#a2ccfe] font-bold text-[15px] md:text-2xl  rounded-full shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 h-10 md:h-12 flex justify-center items-center">
        HOME
      </Link>
      
    </div>
  );
}

export default UnderConstruction;