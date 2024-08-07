import { useState, useEffect } from 'react';
import myImage from '../images/pokeball.png';
import { useNavigate } from 'react-router-dom';

var poke, newC, oldlist;

export default function App({iden}) {
    const [dis, setDis] = useState("");
    const [pokename, setName] = useState("");
    const navigate = useNavigate();

    const pokearray = [1, 6, 7, 25, 384, 493];

    useEffect(()=> {
        const url = "https://poke-api-storage-v1.vercel.app/" + iden;
        if (iden === "") {
            navigate('/login')
        }
        fetch(url)
        .then((response) => {
            return response;
        })
        .then(async (res) => {
            const resp = await res.json()
            setDis(resp.pokecoins);
        })
        .catch(function(e) {
            console.log(e);
            })
    }, []);



    async function scoreChange() {
        const url = "https://poke-api-storage-v1.vercel.app/" + iden;
        await fetch(url)
        .then((response) => {
            return response;
        })
        .then(async (res) => {
            const resp = await res.json()
            newC = resp.pokecoins - 1;
            oldlist = resp.pokemons;
            setDis(newC)
            console.log(newC);

        })
        .catch(function(e) {
            console.log(e);
            })

        var ind = ((Math.floor(Math.random() * 5)).toString())
        const indp = pokearray[ind];
        const news = "https://pokeapi.co/api/v2/pokemon/"+ indp;

        await fetch(news)
        .then(function(response) {
        return response;
        })
        .then(async function(r) {
        const re = await r.json();
        return re;
        })
        .then(function(j) {
        console.log(j);
        poke = {name: j.name, sprites: j.sprites.front_shiny};
        setName(j.name);
        })
        .catch(function(e) {
        alert("pokemon not found");
        console.error(e);
        })

        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({ pokecoins: newC , pokemons: [...oldlist, poke]}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.error("Error:", json);
        } else {
            console.log("API updated:", json);
        }
    }

    return(
    <div className="flex flex-col justify-center items-center">
        <div className="bg-green-500 rounded-md text-white mt-5 font-semibold px-3 py-1 text-2xl">Pokecoins: {dis} </div>
        <button onClick={scoreChange} className="bg-red-500 mt-5 rounded-md text-white font-semibold px-3 py-1 text-2xl hover:bg-red-600 hover:font-bold">Buy Pokemon</button>
        {
            (!pokename == "") && (
                <>
                    <div className="bg-black rounded-md text-white mt-10 font-semibold px-3 py-1 text-1xl">You caught a {pokename}!</div>
                </>
            )
        }
        <img onClick={scoreChange} className='w-36 pt-5' src={myImage} />
    </div>
    )
}