import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import characters from "../../utilities/characters";
import {
  Character,
  SelectedCharacter,
  elementColors,
  loadSelectedCharacters,
  saveSelectedCharacters,
} from "../../utilities/selection-storage";
import CharacterCard from "../../components/CharacterCard";

export default function CharacterSelection() {
  const [userCharacters, setUserCharacters] = useState<SelectedCharacter[]>([]);
  const selectedNames = useMemo(() => new Set(userCharacters.map((character) => character.name)), [userCharacters]);

  const elementTitleColors: Record<string, string> = {
    Anemo: "#9affe6",
    Cryo: "#93c5fd",
    Dendro: "#86efac",
    Electro: "#f0abfc",
    Geo: "#fbbf24",
    Hydro: "#60a5fa",
    Pyro: "#fb7185",
  };

  const groupedCharacters = useMemo(() => {
    const elementsOrder = ["Anemo", "Cryo", "Dendro", "Electro", "Geo", "Hydro", "Pyro"];
    const groups: Record<string, Character[]> = {};

    characters.forEach((character) => {
      (groups[character.element] ||= []).push(character);
    });

    Object.values(groups).forEach((group) => {
      group.sort((a, b) => a.name.localeCompare(b.name));
    });

    return elementsOrder
      .filter((element) => groups[element]?.length)
      .map((element) => ({ element, characters: groups[element] }));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUserCharacters(loadSelectedCharacters());
  }, []);

  function toggleCharacter(character: Character) {
    setUserCharacters((previous) => {
      const alreadySelected = previous.find((item) => item.name === character.name);
      const nextSelected = alreadySelected
        ? previous.filter((item) => item.name !== character.name)
        : [...previous, { ...character, color: elementColors[character.element] ?? "#999" }];
      saveSelectedCharacters(nextSelected);
      return nextSelected;
    });
  }

  return (
    
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:px-8 text-slate-100">
      <section className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Character selection</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Select the characters that you have at level 70 or above.
        </p>
      </section>

      {/* Jump to specific element category */}
      <section className="flex justify-center gap-4 mb-5">
        <p>Jump to: </p>
        {groupedCharacters.map(({ element }) => (
          <button key={element} className="cursor-pointer" onClick={() => document.getElementById(`element-${element}`)?.scrollIntoView({ behavior: "smooth" })}>
            <Image src={`/imgs/element/${element}.png`} alt={element} width={34} height={34} className="inline-block ml-1 -mb-1" />
          </button>
        ))}
      </section>

      <section className="space-y-15">
        {groupedCharacters.map(({ element, characters: group }) => (
          <div id={`element-${element}`}key={element}>
            <h2 className="mb-4 text-xl font-semibold" style={{ color: elementTitleColors[element] }}>
              {element} <Image src={`/imgs/element/${element}.png`} alt={element} width={34} height={34} className="inline-block ml-1 -mb-1" />
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5">
              {group.map((character) => {
                const isSelected = selectedNames.has(character.name);

                return (
                  <button
                    key={character.name}
                    type="button"
                    onClick={() => toggleCharacter(character)}
                    suppressHydrationWarning
                    className={`group flex flex-col overflow-hidden rounded-2xl p-2 text-left transition duration-200 hover:-translate-y-0.8 max-w-[150px] cursor-pointer`}
                    >
                    <CharacterCard characterName={character.name} isSelected={isSelected} />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}