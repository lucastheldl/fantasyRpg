import { db } from "@/firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { AuthContext } from "./AuthContext";

interface CharacterType {
  name: string;
  ofensiva: number;
  resistence: number;
  health: number;
  inteligence: number;
  star: string;
  planet: number;
  satelite: number;
  planetLocation: number;
}

interface GameContextType {
  character: CharacterType | null;
  location: any | null;
  setNewCharacter: (newChar: CharacterType) => void;
  leavePlanet: () => void;
  leaveSatelite: () => void;
  updateLocation: (location: any) => void;
  goToPlanet: (planetIndex: number) => void;
  goToSatelite: (sateliteIndex: number) => void;
  goToStar: (id: string) => void;
}

export const GameContext = createContext({} as GameContextType);

interface GameContextProviderProps {
  children: ReactNode;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [location, setLocation] = useState<any | null>(null);

  const { user } = useContext(AuthContext);

  function setNewCharacter(newChar: CharacterType) {
    setCharacter(newChar);
  }

  function updateLocation(location: any) {
    if (!character) {
      console.log("No character found");
      return;
    }
    setLocation(location);
  }

  async function goToStar(id: string) {
    if (!character) {
      console.log("No character found");
      return;
    }
    if (id == "") {
      return;
    }
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const userDocRef = doc(db, `users/${user!.uid}`);

      const result = await updateDoc(userDocRef, {
        "character.star": id,
      });
    }
    const updatedCharacter = { ...character, star: id };
    setCharacter(updatedCharacter);
  }

  async function goToPlanet(planetIndex: number) {
    if (!character) {
      console.log("No character found");
      return;
    }
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const userDocRef = doc(db, `users/${user!.uid}`);

      const result = await updateDoc(userDocRef, {
        "character.planet": planetIndex,
      });
    }
    const updatedCharacter = { ...character, planet: planetIndex };
    setCharacter(updatedCharacter);
  }

  async function goToSatelite(sateliteIndex: number) {
    if (!character) {
      console.log("No character found");
      return;
    }
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const userDocRef = doc(db, `users/${user!.uid}`);

      const result = await updateDoc(userDocRef, {
        "character.satelite": sateliteIndex,
      });
    }
    const updatedCharacter = { ...character, satelite: sateliteIndex };
    setCharacter(updatedCharacter);
  }

  async function goToPlanetLocation(cityIndex: number) {}

  async function leavePlanetLocation() {}

  async function leavePlanet() {
    if (!character) {
      console.log("No character found");
      return;
    }
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const userDocRef = doc(db, `users/${user!.uid}`);

      const result = await updateDoc(userDocRef, {
        "character.planet": 500,
      });
      console.log(result);
    }
    const updatedCharacter = { ...character, planet: 500 };
    setCharacter(updatedCharacter);
  }

  async function leaveSatelite() {
    if (!character) {
      console.log("No character found");
      return;
    }
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const userDocRef = doc(db, `users/${user!.uid}`);

      const result = await updateDoc(userDocRef, {
        "character.satelite": 500,
      });
      console.log(result);
    }
    const updatedCharacter = { ...character, satelite: 500 };
    setCharacter(updatedCharacter);
  }

  return (
    <GameContext.Provider
      value={{
        character,
        setNewCharacter,
        leavePlanet,
        location,
        updateLocation,
        goToPlanet,
        goToSatelite,
        leaveSatelite,
        goToStar,
      }}
    >
      {loading ? <div>Carregando personagem...</div> : children}
    </GameContext.Provider>
  );
}
