import React, { useState, useEffect } from 'react';

const Poke = ({ pokemon, position }) => {
    const [top, setTop] = useState(0);
    const [isClicked, setClicked] = useState(false);
    const [left, setLeft] = useState(0);

    function handleClick() {
        setClicked(!isClicked);
        
    }

    useEffect(() => {
        if (isClicked) {
            setTop(position.ycord-48);
            setLeft(position.xcord-48);
        }
    }, [position])

    useEffect(() => {
        const randomTop = Math.floor(100 + Math.random() * 400);
        const randomLeft = Math.floor(320 + Math.random() * 900);
        
        setTop(randomTop);
        setLeft(randomLeft);
    }, []); 

    if (!pokemon) {
        return null;
    }

    return (
        <div className={`inline-block border-4 ${isClicked ? 'border-red-500' : 'border-black'}`} 
             style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}>
            <h1 className='font-bold bg-black text-white text-center'>{pokemon.name}</h1>
            <img onClick={handleClick} src={pokemon.sprites} alt="Pokemon" />
        </div>
    );
};

export default Poke;
