import MonsterCard from "./MonsterCard";

interface BossInfoProps {
    currentTheater: Theater;
}

interface Theater {
    month: string,
    elements: string[],
    opening_cast: string[],
    special_invites: string[],
    act_3_boss: string,
    act_6_boss: string,
    act_8_boss: string,
    act_10_boss: string,
    arcana_challenge_1: string[],
    arcana_challenge_2: string[]
}

export default function BossInfo ({currentTheater}: BossInfoProps) {
    
    const arcanaChallenge1 = currentTheater.arcana_challenge_1.map((challenge: string) => 
        <MonsterCard key={challenge} monster={challenge} />
    )

    const arcanaChallenge2 = currentTheater.arcana_challenge_2.map((challenge: string) =>
        <MonsterCard key={challenge} monster={challenge} />
    )

    return (
        <div className="flex flex-col justify-center gap-2 mt-8 pb-12">
            <p className="text-lg font-bold text-center">Bosses</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center items-stretch">
                <div className="flex flex-col">
                    <p className="text-center"> Act 3 </p><MonsterCard monster={currentTheater.act_3_boss} />
                </div>
                <div className="flex flex-col">
                    <p className="text-center"> Act 6 </p><MonsterCard monster={currentTheater.act_6_boss} />
                </div>
                <div className="flex flex-col">
                    <p className="text-center"> Act 8 </p><MonsterCard monster={currentTheater.act_8_boss} />
                </div>
                <div className="flex flex-col">
                    <p className="text-center"> Act 10 </p><MonsterCard monster={currentTheater.act_10_boss} />
                </div>
            </div>

            <p className="text-center mt-14">Arcana Challenge 1</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                {arcanaChallenge1}
            </div>
            <p className="text-center mt-12">Arcana Challenge 2</p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                {arcanaChallenge2}
            </div>
        </div>
    )
}