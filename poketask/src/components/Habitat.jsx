import {useEffect, useState} from 'react';
import Poke from './Pokemon.jsx'
import {useScore} from './Score.jsx'



export default function App() {
    const [pokemon, setPokemon] = useState(null);
    const [childElement, setChild] = useState([]);
    const {score, updateScore} = useScore();

    useEffect(() => {
        // Load score from localStorage on component mount
        const savedScore = localStorage.getItem('score');
        if (savedScore) {
            updateScore(parseInt(savedScore));
        }
    }, [updateScore]);

    useEffect(() => {
        // Save score to localStorage whenever it changes
        localStorage.setItem('score', score.toString());
    }, [score]);

    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(function(response) {
        return response;
        })
        .then(function(r) {
        return r.json();
        })
        .then(function(j) {
        setPokemon(j);
        console.log(j);
        })
        .catch(function(e) {
        alert("pokemon not found");
        console.error(e);
        })
    }, []);

    function pokedisplay() {
        if(score > 2) {
            console.log(score);
            const pokeObj = {pokemon: pokemon, click: false};
            setChild(prev => [...prev, pokeObj]);
        }
    }

    return( 
        <div className="flex items-center justify-center">
            <div className="mt-9 bg-slate-400 w-2/3 ml-5" style={{ height: '500px' }}>
                <button onClick={pokedisplay} className='bg-blue-400'>Add!</button>
                {childElement.map((po) => {
                    return <Poke pokemon={po.pokemon}/>;
                })}
            </div>
        </div>
    );
}