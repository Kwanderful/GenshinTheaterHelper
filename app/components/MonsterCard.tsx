import Image from "next/image";
import monsters from "../utilities/monsters";

interface MonsterCardProps {
    monster: string;
}

export default function MonsterCard ({monster}: MonsterCardProps) {
    const monsterCard = monsters.find((mon) => mon.name === monster);

    return (
        <div className="" style={{ width: 100 }}>
          <div
            className={`relative h-24 overflow-hidden bg-zinc-200`}
          >
            <Image
              src={`/imgs/monster/${monsterCard!.icon}`}
              alt="PMA"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, (max-width: 1536px) 14.28vw, (max-width: 1920px) 12.5vw, 150px"
            />
    
          </div>
          <div className="bg-zinc-100 text-slate-950 text-center m" style={{ height: 55 }}>
            <p className="text-xs pt-1 pb-10">{monsterCard!.name}</p>
          </div>
        </div>
      )
}