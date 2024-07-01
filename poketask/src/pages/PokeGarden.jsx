import Habitat from "../components/Habitat.jsx"

export default function App() {
    const handleRedirect = () => {
        window.location.href = '/'; 
    }
    
    return (
        <div>
            <div className="flex justify-center items-center bg-black pb-4 pt-3">
                <h1 className="ml-5 font-bold text-3xl text-white">Welcome to PokeGarden!</h1>
            </div>
            <Habitat/>
            <div className="flex justify-center items-center">
                <button onClick={handleRedirect}>Go Back!</button>
            </div>
        </div>
        
        );
  }