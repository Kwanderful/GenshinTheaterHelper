interface ResultsDisplayProps {
    numUsableCharacters: number;
}

export default function ResultsDisplay({ numUsableCharacters }: ResultsDisplayProps) {

    let diff: string = "Not enough characters";
    if (numUsableCharacters >= 28) {
      diff = "Lunar";
    } else if (numUsableCharacters >= 22) {
      diff = "Visionary";
    } else if (numUsableCharacters >= 16) {
      diff = "Hard";
    } else if (numUsableCharacters >= 12) {
      diff = "Normal";
    } else if (numUsableCharacters >= 8) {
      diff = "Easy";
    } else {
      diff = "Not enough characters";
    }


    return (
        <div className="mt-5 text-center mt-10">
            <p className="text-xl font-semibold">Usable characters: {numUsableCharacters} ({diff})</p>

            {diff !== "Lunar" && diff !== "Visionary" && <p className="text-md">{22 - numUsableCharacters} more for Visionary</p>}
            {diff !== "Lunar" && <p className="text-md">{28 - numUsableCharacters} more for Lunar</p>}

        </div>
    )
}