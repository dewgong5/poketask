import { useState, useEffect } from 'react';
import {useScore} from './Score.jsx'

export default function App() {
const [first, setFirst] = useState("");
const [second, setSecond] = useState("");
const [isCorrect, setCorrect] = useState(null);
const {score, updateScore} = useScore();

function setUp() {
    setFirst((Math.floor(Math.random() * 9)).toString());
    setSecond((Math.floor(Math.random() * 9)).toString());
}

function calculate() {
    let result = parseInt(first) + parseInt(second);
    const input = document.querySelector("#result");
    if (input.value == result) {
        alert("Correct Answer");
        setCorrect(true);
        updateScore(prevScore => prevScore + 1);
        console.log(score);

    } else {
        alert("Wrong Answer");
        setCorrect(false);
    }
    input.value ="";
    
}

useEffect(() => {
    setUp();
}, []);

return(
    <div className={`${isCorrect !== null ? (isCorrect ? 'bg-slate-500 mr-12' : '') : ''} flex ml-16 bg-white w-1/3 h-16 mt-10 pl-0 gap-2`}>
{!isCorrect && (
        <>
        <div id="first" className="text-white text-2xl font-semibold w-16 pt-3 text-center bg-black">{first}</div>
        <div id="operation" className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">+</div>
        <div id="second" className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">{second}</div>
        <div id="equals"className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">=</div>
        <div className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">
            <input id="result" className="bg-black text-white text-center w-12"></input>
        </div>
        <button id="submit"className="text-white text-2xl font-semibold w-16 pt-3 pb-4 bg-slate-400" onClick={calculate}>✓</button>
        </>
    )}
    </div>
);

}