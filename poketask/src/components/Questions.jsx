import { useState, useEffect } from 'react';

export default function App({ iden, setDis }) {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [hasAnswered, setHas] = useState(false);
    const [result, setResult] = useState(0);

    const [inputValue, setInputValue] = useState("");
    const [isCorrect, setCorrect] = useState(null);
    var newC;


    async function scoreChange() {
        const url = "https://poke-api-storage-v1.vercel.app/" + iden
        await fetch(url)
        .then((response) => {
            return response;
        })
        .then(async (res) => {
            const resp = await res.json()
            newC = resp.pokecoins + 1;
            


        })
        .catch(function(e) {
            console.log(e);
            })

        

        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({ pokecoins: newC }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.error("Error:", json);
        } else {
            console.log("Score updated:", json);
        }

        setDis(newC);


    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setHas(false);
        }, 5000);
    
        return () => clearTimeout(timer); 
    }, [hasAnswered]);

    function setUp() {
        setFirst((Math.floor(Math.random() * 9)).toString());
        setSecond((Math.floor(Math.random() * 9)).toString());
    }

    useEffect(() => {
        if (first && second) {
            setResult(parseInt(first) + parseInt(second));
        }
    }, [first, second]);

    function calculate() {
        console.log("result is" + result);
        console.log(inputValue);
        if (inputValue == result) {
            setCorrect(true);
            scoreChange(); 
        } else {
            const inp = document.querySelector("#result");
            inp.value = "";
            setCorrect(false);
            setHas(true);
        }
        setInputValue("");
    }

    useEffect(() => {
        setUp();
        console.log("set up");
    }, []);

    return (
        <div className={`${isCorrect !== null ? (isCorrect ? 'bg-gray-500 w-1/5' : '') : ''} flex bg-white justify-center w-1/3 h-16 mt-10 gap-2`}>
            {(!hasAnswered && !isCorrect) && (
                <>
                    <div id="first" className="text-white text-2xl font-semibold w-16 pt-3 px-5 text-center bg-black">{first}</div>
                    <div id="operation" className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">+</div>
                    <div id="second" className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">{second}</div>
                    <div id="equals" className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">=</div>
                    <div className="text-white text-2xl font-semibold w-16 pt-3 text-center  bg-black">
                        <input onChange={(e) => setInputValue(e.target.value)} id="result" className="bg-black text-white text-center w-12" />
                    </div>
                    <button id="submit" className="text-white text-2xl font-semibold w-16 pt-3 pb-4 hover:bg-slate-500 bg-slate-400" onClick={calculate}>✓</button>
                </>
                
            )}

            {
                hasAnswered && (
                    <>
                        <div className="text-red-500 text-2xl font-semibold pt-3 px-5 text-center">Wrong! try again in 5 secs!</div>

                    </>
                )
            }

{
                isCorrect && (
                    <>
                        <div className="text-green-500 text-2xl font-semibold pt-3 px-5 text-center">Great job! +1 Pokecoins!</div>

                    </>
                )
            }
        </div>
    );
}
