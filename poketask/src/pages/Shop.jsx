import Pokeshop from "../components/Pokeshop.jsx"
import { useNavigate } from 'react-router-dom';

export default function App({identity, setIdentity}) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    }
    
    return (
        <div>
            <div className="flex justify-center items-center bg-black pb-4 pt-3">
                <h1 className="ml-5 font-bold text-3xl text-white">Welcome to Shop!</h1>
            </div>
            <Pokeshop iden={identity} />
            <div className="flex justify-center items-center">
                <button className="bg-black rounded-md font-semibold mt-10 px-2 py-2 text-white text-1xl hover:bg-slate-300 hover:font-bold hover:text-slate-900" onClick={handleRedirect}>Go Back!</button>
            </div>
        </div>
        
        );
  }