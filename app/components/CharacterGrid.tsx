import characters from "../utilities/characters";
import CharacterCard from "./CharacterCard";

interface CharacterGridProps {
    characterNames: string[];
}

export default function CharacterGrid({ characterNames }: CharacterGridProps) {
    if (characterNames.length === 0) {
        return null;
    }

    const charGrid = characterNames.map((character) => {
        const characterData = characters.find((c) => c.name === character);
        return (
            <CharacterCard key={character} characterName={characterData?.name || character} isSelected={true} />
        );
    })

    return (
        <>
        <div className="flex flex-wrap justify-center gap-4 mt-5 py-2">
            {charGrid}
        </div>
        </>
    )

}