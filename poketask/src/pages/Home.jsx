import { useState } from 'react'
import Footer from "../components/Footer.jsx"

export default function App() {
    const PlayRedirect = () => {
        window.location.href = '/play'; 
    }

    const GardenRedirect = () => {
        window.location.href = '/pokegarden'; 
    }
    
    return (
        <div>
            <div className="flex justify-center items-center pt-60 pb-0">
                <h1 className="font-bold text-4xl">Hello, UserX!</h1>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <button onClick={PlayRedirect} className="font-semibold bg-black h-10 px-6 mr-2 text-white rounded hover:bg-slate-300 hover:text-slate-900">Play</button>
                <button onClick={GardenRedirect} className='font-semibold bg-black h-10 px-6 mr-2 text-white rounded  hover:bg-slate-300 hover:text-slate-900'>PokéGarden</button>
                <button className="font-semibold bg-black  h-10 px-6 text-white rounded  hover:bg-slate-300 hover:text-slate-900">Shop</button>
            </div>
            <Footer/>
        </div>
        
        );
  }