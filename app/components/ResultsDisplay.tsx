interface ResultsDisplayProps {
    numUsableCharacters: number;
    highestTheater: string;
}

export default function ResultsDisplay({ numUsableCharacters, highestTheater }: ResultsDisplayProps) {

    return (
        <div className="mt-5 text-center mt-10">
            <p className="text-xl font-semibold">Usable characters: {numUsableCharacters} ({highestTheater})</p>

            {highestTheater !== "Lunar" && highestTheater !== "Visionary" && <p className="text-md">{22 - numUsableCharacters} more for Visionary</p>}
            {highestTheater !== "Lunar" && <p className="text-md">{28 - numUsableCharacters} more for Lunar</p>}

        </div>
    )
}