"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function useLocalStorage(): [string[], Dispatch<SetStateAction<string[]>>, boolean] {
    const [characters, setCharacters] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        try {
            const savedCharacters = localStorage.getItem('selected-chars');
            if (savedCharacters) {
                // Calling setState in a useEffect is usually bad practice but since this only runs once,
                // it should be okay. Would love a better solution though.
                setCharacters(JSON.parse(savedCharacters));
            }
        } catch (error) {
            console.error("Failed to load characters: ", error);
        } finally {
            setLoaded(true);
        }
    }, []);
   
    useEffect(() => {
        if (!loaded) return;
        try {
            localStorage.setItem('selected-chars', JSON.stringify(characters));
        } catch (error) {
            console.error("Failed writing characters to localStorage: ", error);
        }
    }, [characters, loaded])

    return [characters, setCharacters, loaded];
}