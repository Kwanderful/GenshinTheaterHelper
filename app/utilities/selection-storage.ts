export interface Character {
  name: string;
  rarity: number;
  element: string;
  icon: string;
}

export interface SelectedCharacter extends Character {
  color: string;
}

export const elementColors: Record<string, string> = {
  Hydro: "#4ea8ff",
  Pyro: "#ff6f4a",
  Electro: "#b460ff",
  Cryo: "#66d9ff",
  Geo: "#e0c06c",
  Anemo: "#9affe6",
  Dendro: "#4fc18d",
};

const STORAGE_KEY = "theaterhelper-selected-characters";

export function loadSelectedCharacters(): SelectedCharacter[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

export function saveSelectedCharacters(characters: SelectedCharacter[]) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
  } catch {
    // ignore storage errors
  }
}
