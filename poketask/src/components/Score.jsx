// ScoreContext.js
import { createContext, useContext, useState } from 'react';

const ScoreContext = createContext();

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    const updateScore = (newScore) => {
        setScore(newScore);
        localStorage.setItem('score', newScore.toString()); // Save to localStorage
    };

    const getScore = () => {
        const savedScore = localStorage.getItem('score');
        return savedScore ? parseInt(savedScore) : 0;
    };

    return (
        <ScoreContext.Provider value={{ score, updateScore, getScore }}>
            {children}
        </ScoreContext.Provider>
    );
};
