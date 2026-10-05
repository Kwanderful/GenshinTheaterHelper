import characters from "./characters";
import { Theater } from "../types/Theater";

export default function getNumUsableCharacters(currentTheater: Theater, savedCharacters: string[]) {
        const savedCharacterObjects = savedCharacters.map(
            (savedCharacter: string) => characters.find(character => character.name === savedCharacter)
        );    

        if (!currentTheater) {
            return 0;
        }

        const openingCastMatches = currentTheater.opening_cast.filter((character) =>
            savedCharacters.some((saved) => saved !== character)
        ).length;

        const specialInviteMatches = currentTheater.special_invites.filter((character) =>
            savedCharacters.some((saved) => saved === character),
        ).length;

        const elementMatches = savedCharacterObjects.filter(
            (selected) =>
                currentTheater.elements.includes(selected!.element) &&
                !currentTheater.opening_cast.includes(selected!.name) &&
                !currentTheater.special_invites.includes(selected!.name),
        ).length;

        return openingCastMatches + specialInviteMatches + elementMatches + (savedCharacters.length === 0 ? 6 : 0);
}