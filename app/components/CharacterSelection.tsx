"use client";

import { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Checkbox, FormControlLabel, Paper } from "@mui/material";
import CharacterCard from "./CharacterCard";
import characters from "../utilities/characters";
import { Theater } from "../types/Theater";

interface Character {
    name: string;
    rarity: number;
    element: string;
    icon: string;
}

interface CharacterSelectionProps {
  savedCharacters: string[];
  setSavedCharacters: Dispatch<SetStateAction<string[]>>;
  loadedState: boolean;
  currentTheater: Theater;
}

const elements = ["Anemo", "Cryo", "Dendro", "Electro", "Hydro", "Geo", "Pyro"];

export default function CharacterSelection ({ savedCharacters, setSavedCharacters, loadedState, currentTheater}: CharacterSelectionProps) {
    const [charactersToShow, setCharactersToShow] = useState<Character[]>(characters);
    const [currentElement, setCurrentElement] = useState("None");
    const [unselected, setUnselected] = useState(false);

    const CharGrid = charactersToShow.map((character) => (
        <button
        key={character.name}
        onClick={() => selectCharacter(character.name)}
        className="group flex flex-col p-2 transition duration-200 hover:-translate-y-0.5 max-w-[150px] cursor-pointer" > 
            <CharacterCard characterName={character.name} isSelected={savedCharacters.includes(character.name)}/>
        </button>
    ))

    const ElementSelection = elements.map((element) => 
        <button key={element} className="transition duration-200 hover:-translate-y-0.5 max-w-[150px] cursor-pointer" 
        onClick={() => selectElement(element)}>
            <Image src={`/imgs/element/${element}.png`} alt={element} width={34} height={34}
            className={`inline-block ml-1 -mb-1 ${element === currentElement ? 'saturate-100' : 'saturate-0'}`} />
        </button>
    )

    function hideUnchecked() {
        const selectedFilteredCharacters = charactersToShow.filter((character) => savedCharacters.includes(character.name));
        setCharactersToShow(selectedFilteredCharacters);
        setUnselected(true);
    }

    function currentTheaterCharacters () {
        const filteredCharacters = characters.filter(character => character.element === currentTheater.elements[0]
            || character.element === currentTheater.elements[1] || character.element === currentTheater.elements[2]
        );
        currentTheater.special_invites.map((spec_inv) => {
            const temp = characters.find(character => character.name === spec_inv);
            if (temp) {
                filteredCharacters.push(temp);
            }
        })
        resetElement();
        return filteredCharacters;
    }

    function selectCharacter(character: string) {
        const characterIsSaved = savedCharacters.includes(character);
        if (characterIsSaved) {
            removeCharacter(character);
        }
        else {
            addCharacter(character);
        }
    }

    const addCharacter = (characterToAdd: string) => {
        setSavedCharacters((previous) =>
        [...previous, characterToAdd]
        );
    } 

    const removeCharacter = (characterToRemove: string) => {
        setSavedCharacters((previous) =>
            previous.filter((character) => character !== characterToRemove)
        );
    }

    function selectElement(element: string) {
        if (element === currentElement) {
            resetElement();
            return;
        }

        const filteredCharacters = characters.filter(character => character.element === element);
        setCharactersToShow(filteredCharacters);
        setCurrentElement(element);
    }

    function resetElement() {
        setCharactersToShow(characters);
        setCurrentElement("None");
    }

    return (
    <>
        {loadedState &&
        <main className="py-6 text-slate-100 w-250">
            {/* Text */}
            <Paper elevation={3} style={{backgroundColor: "#3c1f72", color: "#fff"}}>
            <section className="mb-4 py-3">
                <h1 className="text-3xl font-semibold text-white text-center">Character selection</h1>
                <p className="mt-2 text-sm text-slate-300 text-center">
                Select the characters that you have at level 70 or above.
                </p>
            </section>
            </Paper>

            {/* Element Selection */}
            <Paper elevation={3} style={{backgroundColor: "#452e70", color: "#fff"}}>
            <section className="flex flex-wrap justify-center gap-4 pt-4">
                {ElementSelection}
            </section>
            <section className="flex justify-center mt-4 pb-2 gap-6">
                <button className="cursor-pointer font-semibold hover:underline" onClick={() => setCharactersToShow(currentTheaterCharacters())}>Current theater</button>
                <button className="cursor-pointer font-semibold hover:underline" onClick={hideUnchecked}>Hide unselected</button>
                <button className="cursor-pointer font-semibold hover:underline" onClick={() => resetElement()}>Reset filters</button>
            </section>
            </Paper>

            {/* Character Selection */}
            <Paper elevation={3} style={{backgroundColor: "#3c1f72", color: "#fff"}}>
            <section className="flex flex-wrap justify-center gap-4 mt-4 py-3">
                {CharGrid}
            </section>
            </Paper>
        </main>}
    </>
    )
}