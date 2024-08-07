import {useEffect, useState} from 'react';
import Footer from "../components/Footer.jsx"
import myImage from '../images/pokeball.png';
import { useNavigate } from 'react-router-dom';


export default function App({identity, setIdentity}) {
    const [username, setName] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(identity);
    }, [identity])

    function findUser(arr) {
        var resp;
        arr.forEach(element => {
            if(element.username == username && element.password == pass) {
                console.log(element._id)
                resp = element._id
            }

        });

        return resp;

    }

    const PlayRedirect = async () => {
        fetch("https://poke-api-storage-v1.vercel.app/")
        .then((response) => {
            return response;
        })
        .then(async (res) => {
            const resp = await res.json();
            console.log(resp);
            const id = findUser(resp);
            await setIdentity(id);
            navigate("/")

        })
        .catch(function(e) {
            console.log(e);
            })
        

    }


    
    return (
        <div>
            <div className="flex justify-center items-center pt-72 pb-0">
                <h1 className="font-bold text-4xl">Hello, Adventurer!</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-3 pt-10'>
                <div className='flex flex-col border-black border-4 px-10 pb-16 pt-5'>
                    <label className="font-bold text-2xl pb-3 pl-20">Login!</label>
                <label className="font-semibold">Username:</label>
                <input onChange={(e) => setName(e.target.value)} className="bg-black h-10 px-6 rounded-md text-white" placeholder='Type your username'></input>
                <label className="font-semibold">Password:</label>
                <input onChange={(e) => setPass(e.target.value)} className="bg-black h-10 px-6 rounded-md text-white" placeholder='Type your password'></input>
                <button onClick={PlayRedirect} className="font-bold bg-black h-10 px-24 mt-3 text-white rounded-md hover:bg-slate-300 hover:text-slate-900">Login</button>
                <div>Don't have an account? <a className='text-blue-700 hover:underline decoration-blue-700' href="/signup">Sign Up</a></div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-16 pt-5' src={myImage}/>
            </div>
        </div>
        
        );
  }