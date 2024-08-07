import {useEffect, useState} from 'react';
import Poke from './Pokemon.jsx'
import myImage from '../images/bg-grass.png';
import { useNavigate } from 'react-router-dom';

export default function App({iden}) {
    const [pokemon, setPokemon] = useState(null);
    const [stat, setStat] = useState(false);
    const [childElement, setChild] = useState([]);
    const [mousePos, setPos] = useState({});
    const navigate = useNavigate();

    useEffect(()=> {
        const url = "https://poke-api-storage-v1.vercel.app/" + iden;
        if (iden === "") {
            navigate('/')
        }
        fetch(url)
        .then(function(response) {
        return response;
        })
        .then(function(r) {
        return r.json();
        })
        .then(function(j) {
        setPokemon(j.pokemons);
        console.log(j);
        setStat(true);
        })
        .catch(function(e) {
        alert("pokemon not found");
        console.error(e);
        })
    }, []);

    function posChange(e) {
        let x = e.clientX;
        let y = e.clientY;
        setPos({xcord: x, ycord: y})
        console.log(mousePos);
    }

    function bigdisplay() {
            if (Array.isArray(pokemon)) {
                setChild(pokemon);
            } else {
                setChild([]);
            }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            bigdisplay();
        }, 300);
    
        return () => clearTimeout(timer); 
    }, [stat]);

    return( 
        <div className="flex flex-col items-center justify-center">
            <div onClick = {posChange} className="mt-9 bg-slate-300 ml-5" style={{width: '1600px', height: '700px' }}>
                <img style={{width: '1600px', height: '700px' }} src ={myImage}/>
                {childElement.map((po) => {
                    return <Poke pokemon={po} position = {mousePos} />;
                })}
            </div>
        </div>
    );
}