import {useEffect, useState} from 'react';
import Footer from "../components/Footer.jsx"
import myImage from '../images/pokeball.png';
import { useNavigate } from 'react-router-dom';



export default function App() {
    const [username, setName] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();


    async function createUser() {
        const response = await fetch("https://poke-api-storage-v1.vercel.app/", {
            method: 'POST',
            body: JSON.stringify({ username: username, password: pass }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.error("Error:", json);
        } else {
            console.log("Account made:", json);
            navigate('/login');
        }
    }


    return (
        <div>
            <div className="flex justify-center items-center pt-72 pb-0">
                <h1 className="font-bold text-4xl">Join Us, Adventurer!</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 pt-10'>
                <div className='flex flex-col border-black border-4 px-10 pb-16 pt-5'>
                    <label className="font-bold text-2xl pb-3 pl-20">Sign Up!</label>
                <label className="font-semibold">Username:</label>
                <input onChange={(e) => setName(e.target.value)} className="bg-black h-10 px-6 rounded-md text-white" placeholder='Type your username'></input>
                <label className="font-semibold">Password:</label>
                <input onChange={(e) => setPass(e.target.value)} className="bg-black h-10 px-6 rounded-md text-white" placeholder='Type your password'></input>
                <button onClick={createUser} className="font-bold bg-black h-10 px-24 mt-3 text-white rounded hover:bg-slate-300 hover:font-bold hover:text-slate-900">Sign Up</button>
                </div>
                <div>Please don't use your real email and password, pick a fun username and password!</div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-16 pt-5' src={myImage}/>
            </div>
        </div>
        
        );
  }