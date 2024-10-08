import { useEffect } from "react";
import Habitat from "../components/Habitat.jsx"
import { useNavigate } from 'react-router-dom';

export default function App({identity, setIdentity}) {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/');
    }

    console.log(identity)
    
    return (
        <div>
            <div className="flex justify-center items-center bg-black pb-4 pt-3">
                <h1 className="ml-5 font-bold text-3xl text-white">Welcome to PokeGarden!</h1>
            </div>
            <Habitat iden={identity} />  
            <div className="flex justify-center items-center">
            <button className="bg-black rounded-md font-semibold mt-10 px-2 py-2 text-white text-1xl hover:bg-slate-300 hover:font-bold hover:text-slate-900" onClick={handleRedirect}>Go Back!</button>
            </div>
        </div>
        
        );
  }