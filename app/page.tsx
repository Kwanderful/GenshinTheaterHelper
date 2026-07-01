"use client";
import Image from "next/image";
import { ViewTransition, startTransition, useMemo, useState, useEffect } from "react";
import { SelectedCharacter, loadSelectedCharacters } from "./utilities/selection-storage";
import theaters from "./utilities/theaters";
import CharacterGrid from "./components/CharacterGrid";
import ResultsDisplay from "./components/ResultsDisplay";
import CharacterSelection from "./components/ui/CharacterSelection";

function CharSelection() {
    return (
        <ViewTransition enter="slide-in" exit="slide-in">
            <CharacterSelection />
        </ViewTransition>
    );
}

export default function Home() {
  const [selectedCharacters, setSelectedCharacters] = useState<SelectedCharacter[]>([]);
  const theaterMonths = theaters.map((theater) => theater.month);
  const [currentTheater, setCurrentTheater] = useState(theaters[0] || null);
  const [includeTraveler, setIncludeTraveler] = useState(true);
  const [showCharacterSelection, setShowCharacterSelection] = useState(false);

  // Calculate usable characters when current theater or selected characters change
  useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedCharacters(loadSelectedCharacters());
  }, []);

  const { numUsableCharacters } = useMemo(() => {
    if (!currentTheater) {
      return { numUsableCharacters: 0 };
    }
    // Count members of opening cast that user does not own
    const openingCastMatches = currentTheater.opening_cast.filter((character) =>
      selectedCharacters.some((selected) => selected.name !== character),
    ).length;

    // Count members of special invites that user does own
    const specialInviteMatches = currentTheater.special_invites.filter((character) =>
      selectedCharacters.some((selected) => selected.name === character),
    ).length;

    // Count members of theater's current elements that user owns and are not already accounted for
    const elementMatches = selectedCharacters.filter(
      (selected) =>
        currentTheater.elements.includes(selected.element) &&
        !currentTheater.opening_cast.includes(selected.name) &&
        !currentTheater.special_invites.includes(selected.name),
    ).length;

    // If the user has not selected any characters, grant them 6 to account for the opening cast
    const count = openingCastMatches + specialInviteMatches + elementMatches;

    return { numUsableCharacters: count };
  }, [currentTheater, selectedCharacters]);

  return (
    <main className="flex h-screen justify-center">
      {/* ------------------------------------ Theater information ------------------------------------ */}
      <section>
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
        <button onClick={() => startTransition(() => { setShowCharacterSelection((prev) => !prev);})}>Character selection</button>
        </div>

        {/* Display usable characters and characters needed for next difficulty */}
        <ResultsDisplay numUsableCharacters={numUsableCharacters + (includeTraveler ? 1 : 0)} />

        <div className="flex justify-center gap-2 mt-5">
          <p className="text-lg">Include traveler?</p>
          <input type="checkbox" id="include-traveler" checked={includeTraveler} onChange={() => setIncludeTraveler(!includeTraveler)} />
        </div>

        {/* Theater display */}
        <div className="flex justify-center gap-2 mt-8">
          {currentTheater.elements.map((element) => (
            <Image key={element} src={`/imgs/element/${element}.png`} alt={element} width={40} height={40}  />
          ))}
        </div>

        {/* Characters in current theater */}
        <CharacterGrid title="Opening Cast" characterNames={currentTheater.opening_cast} />
        <CharacterGrid title="Special Invites" characterNames={currentTheater.special_invites} />
      </section>
      
      {/* ------------------------------------ Character selection ------------------------------------ */}
      <section className="max-h-screen overflow-y-auto">
        {showCharacterSelection ? <CharSelection /> : null}
      </section>
      
    </main>
  );
}

