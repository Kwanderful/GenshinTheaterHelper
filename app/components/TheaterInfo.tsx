"use client";

import Image from "next/image";
import { useState } from "react";
import { Paper, Checkbox, FormControlLabel } from "@mui/material";
import ResultsDisplay from "./ResultsDisplay";
import CharacterGrid from "./CharacterGrid";
import BossInfo from "./BossInfo";
import theaters from "../utilities/theaters";
import getNumUsableCharacters from "../utilities/getNumUsableCharacters";
import { Theater } from "../types/Theater";

interface TheaterInfoProps {
    savedCharacters: string[];
    currentTheater: Theater;
    updateTheater: (month: string) => void;
}

export default function TheaterInfo({savedCharacters, currentTheater, updateTheater}: TheaterInfoProps) {
    const [includeTraveler, setIncludeTraveler] = useState(true);

    const theaterMonths = theaters.map((theater) => theater.month);

    function toggleTraveler() {
        if (includeTraveler) {
            setIncludeTraveler(false);
        }
        else {
            setIncludeTraveler(true);
        }
    }

    return (
    <div className="px-4">
        <Paper elevation={3} style={{backgroundColor: "#3c1f72", color: "#fff"}}>
            <p className="mt-5 pt-6 text-3xl font-semibold text-white text-center">Genshin Theater Helper</p>
            <p className="text-center text-xs pb-4">a tool made by Sawri</p>
            
        </Paper>

        <Paper elevation={3} style={{backgroundColor: "#452e70", color: "#fff"}}>
            <ResultsDisplay numUsableCharacters={getNumUsableCharacters(currentTheater, savedCharacters) + (includeTraveler ? 1 : 0)} />
            <div className="flex justify-center"> 
                <FormControlLabel 
                control={<Checkbox checked={includeTraveler} onChange={() => toggleTraveler()} sx={{color: "#fff", '&.Mui-checked': {color: "#fff"}}}/> } 
                label="Include traveler" 
                labelPlacement="start"/>
            </div>
        </Paper>

        {/* Theater display */}
        
        <Paper elevation={3} style={{backgroundColor: "#3c1f72", color: "#fff"}}>
            <section className="py-3 mt-8">
                {/* Month selection */}
                <div className="flex justify-center gap-10">
                    {theaterMonths.map((month) => (
                    <button
                    key={month}
                    onClick={() => updateTheater(month)}
                    style={{ color: currentTheater?.month === month ? "white" : "gray", textDecoration: currentTheater?.month === month ? "underline" : "none" }}
                    className="text-lg cursor-pointer hover:text-slate-200">
                    {month}
                    </button>
                    ))}
                </div>
                <div className="flex justify-center gap-2 mt-8">
                    {currentTheater.elements.map((element) => (
                        <Image key={element} src={`/imgs/element/${element}.png`} alt={element} width={40} height={40} />
                    ))}
                </div>
            </section>
        </Paper>
        
        
        {/* Characters in current theater */}
        <Paper elevation={3} style={{backgroundColor: "#452e70", color: "#fff"}}>
            <p className="text-lg font-bold text-center mt-8 pt-3">Opening Cast</p>
            <CharacterGrid characterNames={currentTheater.opening_cast} />
            <p className="text-lg font-bold text-center mt-10">Special Invites</p>
            <CharacterGrid characterNames={currentTheater.special_invites} />

            {currentTheater.act_3_boss && <BossInfo currentTheater={currentTheater} />}
        </Paper>
    </div>
    )
}