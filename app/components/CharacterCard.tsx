import characters from "../utilities/characters";
import Image from "next/image";

interface CharacterCardProps {
  characterName: string;
  isSelected: boolean;
}

export default function CharacterCard ({ characterName, isSelected }: CharacterCardProps) {

  const characterData = characters.find((c) => c.name === characterName);
  
  return (
    <div key={characterName} style={{ width: 100 }}>
      <div
        className={`relative mb-2 h-24 overflow-hidden rounded-2xl ${isSelected ? "grayscale-0" : "grayscale"}`}
        style={{
          backgroundColor: characterData?.rarity === 5 ? "#dbc84d" : "#a74ddb",
        }}
      >
        <Image
          src={`/imgs/character/${characterData?.icon}`}
          alt={characterData!.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, (max-width: 1536px) 14.28vw, (max-width: 1920px) 12.5vw, 150px"
        />
        <Image src={`/imgs/element/${characterData?.element}.png`} alt={characterData?.element || "Element"} width={30} height={30} className="absolute top-1 left-1 opacity-100" />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <p>{characterData?.name}</p>
        </div>
      </div>
    </div>
  )
};
