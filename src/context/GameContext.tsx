import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
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
  city: number;
}

interface GameContextType {
  character: CharacterType | null;
  setNewCharacter: (newChar: CharacterType) => void;
}

export const GameContext = createContext({} as GameContextType);

interface GameContextProviderProps {
  children: ReactNode;
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const { user } = useContext(AuthContext);

  function setNewCharacter(newChar: CharacterType) {
    setCharacter(newChar);
  }

  return (
    <GameContext.Provider value={{ character, setNewCharacter }}>
      {loading ? <div>Carregando personagem...</div> : children}
    </GameContext.Provider>
  );
}
