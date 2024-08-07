import { useState, useEffect } from 'react'
import Questions from "../components/Questions.jsx"
import Habitat from "../components/Habitat.jsx"
import { useNavigate } from 'react-router-dom';


export default function App({identity, setIdentity}) {
    const [dis, setNew] = useState("");
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    }

    useEffect(()=> {
        const url = "https://poke-api-storage-v1.vercel.app/" + identity
        if (identity == "") {
            navigate('login');
        }
        fetch(url)
        .then((response) => {
            return response;
        })
        .then(async (res) => {
            const resp = await res.json()
            setNew(resp.pokecoins);
        })
        .catch(function(e) {
            console.log(e);
            })
    }, []);


    return (
    <div>
        <div className="flex justify-center items-center bg-black pb-4 pt-3">
            <h1 className="ml-5 font-bold text-3xl text-white">Welcome to Poketask!</h1>
        </div>

        <div className='flex flex-col justify-center items-center'>
        <div className="bg-green-500 rounded-md text-white mt-5 font-semibold px-3 py-1 text-2xl">Pokecoins: {dis} </div>
            <Questions iden={identity} setDis={setNew}/>
            <Questions iden={identity} setDis={setNew}/>
            <Questions iden={identity} setDis={setNew}/>
            <Questions iden={identity} setDis={setNew}/>
            <button className="bg-black rounded-md font-semibold mt-10 px-2 py-2 text-white text-1xl hover:bg-slate-300 hover:font-bold hover:text-slate-900" onClick={handleRedirect}>Go Back!</button>
        </div>
    </div>
    );
  }