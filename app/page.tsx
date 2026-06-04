"use client";

import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { SelectedCharacter, loadSelectedCharacters } from "./utilities/selection-storage";
import theaters from "./utilities/theaters";
import CharacterGrid from "./components/CharacterGrid";
import ResultsDisplay from "./components/ResultsDisplay";

export default function Home() {
  const [selectedCharacters, setSelectedCharacters] = useState<SelectedCharacter[]>([]);
  const theaterMonths = theaters.map((theater) => theater.month);
  const [currentTheater, setCurrentTheater] = useState(theaters[0] || null);

  useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedCharacters(loadSelectedCharacters());
      }, []);

  const { numUsableCharacters, highestTheater } = useMemo(() => {
    if (!currentTheater) {
      return { numUsableCharacters: 0, highestTheater: "Easy" };
    }

    const openingCastMatches = currentTheater.opening_cast.filter((character) =>
      selectedCharacters.some((selected) => selected.name !== character),
    ).length;

    const specialInviteMatches = currentTheater.special_invites.filter((character) =>
      selectedCharacters.some((selected) => selected.name === character),
    ).length;

    const elementMatches = selectedCharacters.filter(
      (selected) =>
        currentTheater.elements.includes(selected.element) &&
        !currentTheater.opening_cast.includes(selected.name) &&
        !currentTheater.special_invites.includes(selected.name),
    ).length;

    const count = openingCastMatches + specialInviteMatches + elementMatches;
    let highestLevel = "Easy";

    if (count >= 28) {
      highestLevel = "Lunar";
    } else if (count >= 22) {
      highestLevel = "Visionary";
    } else if (count >= 16) {
      highestLevel = "Hard";
    } else if (count >= 12) {
      highestLevel = "Normal";
    } else {
      highestLevel = "Easy";
    }

    return { numUsableCharacters: count, highestTheater: highestLevel };
  }, [currentTheater, selectedCharacters]);


  return (
    <div>
      {/* Month selection */}
      <div className="flex justify-center gap-10 mt-8">
        {theaterMonths.map((month) => (
        <button
          key={month}
          onClick={() => setCurrentTheater(theaters.find((theater) => theater.month === month) || theaters[0])}
          style={{ color: currentTheater?.month === month ? "white" : "gray", textDecoration: currentTheater?.month === month ? "underline" : "none" }}
          className="text-lg cursor-pointer hover:text-white"
        >
          {month}
        </button>
      ))}
      </div>

      {/* Display usable characters and characters needed for next difficulty */}
      <ResultsDisplay numUsableCharacters={numUsableCharacters} highestTheater={highestTheater} />

      {/* Theater display */}
      <div className="flex justify-center gap-2 mt-10">
        {currentTheater.elements.map((element) => (
          <Image key={element} src={`/imgs/element/${element.toLowerCase()}.png`} alt={element} width={40} height={40}  />
        ))}
      </div>

      {/* Characters in current theater */}
      <CharacterGrid title="Opening Cast" characterNames={currentTheater.opening_cast} />
      <CharacterGrid title="Special Invites" characterNames={currentTheater.special_invites} />
    </div>
  );
}

