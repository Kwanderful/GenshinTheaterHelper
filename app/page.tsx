"use client";

import { useState } from "react";
import CharacterSelection from "./components/CharacterSelection";
import TheaterInfo from "./components/TheaterInfo";
import useLocalStorage from "./hooks/useLocalStorage";
import theaters from "./utilities/theaters";

export default function Home() {
  const [savedCharacters, setSavedCharacters, loadedState] = useLocalStorage();
  const [currentTheater, setCurrentTheater] = useState(theaters[0] || null);

  function changeTheater (month: string) {
    setCurrentTheater(theaters.find((theater) => theater.month === month) || theaters[0]);
  }

  return (
    <div className="flex flex-col justify-center text-slate-100 bg font-sans">
      <div className="flex justify-center">
        <TheaterInfo 
        savedCharacters={savedCharacters} 
        currentTheater={currentTheater} 
        updateTheater={changeTheater} 
        />
      </div>
  
      <div className="flex justify-center mt-10">
        <CharacterSelection 
          savedCharacters={savedCharacters} 
          setSavedCharacters={setSavedCharacters}
          loadedState={loadedState} 
          currentTheater={currentTheater}
          />
      </div>
    </div>
  );
}
