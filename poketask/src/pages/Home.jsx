import {useEffect, useState} from 'react';
import Footer from "../components/Footer.jsx"
import myImage from '../images/pokeball.png';
import { useNavigate } from 'react-router-dom';


export default function App({identity, setIdentity}) {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    

    useEffect(()=> {
        console.log(identity);
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
            console.log(resp);
            setName(resp.username);
        })
        .catch(function(e) {
            console.log(e);
            })
    }, []);



    const PlayRedirect = () => {
        navigate("/play")
    }

    const GardenRedirect = () => {
       navigate("/pokegarden")
    }

    const ShopRedirect = () => {
        navigate('/shop')
    }
    
    return (
        <div>
            <div className="flex justify-center items-center pt-96 pb-0">
                <h1 className="font-bold text-4xl">Hello, {name}!</h1>
                
            </div>
            <div className='flex justify-center items-center pt-10'>
                <button onClick={PlayRedirect} className="font-semibold bg-black h-10 px-6 mr-2 text-white rounded hover:bg-slate-300 hover:font-bold hover:text-slate-900">Play</button>
                <button onClick={GardenRedirect} className='font-semibold bg-black h-10 px-6 mr-2 text-white rounded  hover:bg-slate-300 hover:font-bold hover:text-slate-900'>PokéGarden</button>
                <button onClick={ShopRedirect} className="font-semibold bg-black  h-10 px-6 text-white rounded  hover:bg-slate-300 hover:font-bold hover:text-slate-900">Shop</button>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-16 pt-5' src={myImage}/>
            </div>
            <Footer/>
        </div>
        
        );
  }