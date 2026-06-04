import characters from "../utilities/characters";
import CharacterCard from "./CharacterCard";

interface CharacterGridProps {
  title: string;
  characterNames: string[];
}

export default function CharacterGrid({ title, characterNames }: CharacterGridProps) {
  if (characterNames.length === 0) {
    return null;
  }

  return (
    <>
      <p className="text-lg font-bold text-center mt-10" suppressHydrationWarning>{title}</p>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {characterNames.map((character) => {
          const characterData = characters.find((c) => c.name === character);

          return (
            <CharacterCard key={character} characterName={characterData?.name || character} isSelected={true} />
          );
        })}
      </div>
    </>
  );
}
