import React, { useState, useEffect } from 'react';

const Poke = ({ pokemon }) => {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    useEffect(() => {
        const randomTop = Math.floor(100 + Math.random() * 400);
        const randomLeft = Math.floor(220 + Math.random() * 900);
        
        setTop(randomTop);
        setLeft(randomLeft);
    }, []); 

    if (!pokemon) {
        return null;
    }

    return (
        <div className=' inline-block' style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}>
            <img src={pokemon.sprites.front_default} alt="Pokemon" />
        </div>
    );
};

export default Poke;
