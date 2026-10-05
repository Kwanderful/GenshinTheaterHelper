import characters from "../utilities/characters";
import Image from "next/image";

interface CharacterCardProps {
  characterName: string;
  isSelected: boolean;
}

export default function CharacterCard ({ characterName, isSelected }: CharacterCardProps) {

  const characterData = characters.find((c) => c.name === characterName);
  
  return (
    <div key={characterName} className="" style={{ width: 100, height: 120 }}>
      <div
        className={`relative h-24 overflow-hidden ${isSelected ? "grayscale-0" : "grayscale"} 
        ${characterData?.rarity === 5 ? "bg-gradient-to-br from-[#c89226] via-[#c89226] to-[#dcab45]" 
          : "bg-gradient-to-br from-[#7354c5] via-[#856acc] to-[#977FD3]"}`}
      >
        <Image
          src={`/imgs/character/${characterData?.icon}`}
          alt={characterData!.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, (max-width: 1536px) 14.28vw, (max-width: 1920px) 12.5vw, 150px"
        />
        <Image src={`/imgs/element/${characterData?.element}.png`} alt={characterData?.element || "Element"} width={25} height={25} className="absolute top-1 left-1 opacity-100" />

      </div>
      <div className="bg-zinc-100 text-slate-950 text-center">
        <p className="text-xs py-1">{characterData?.name}</p>
      </div>
    </div>
  )
};