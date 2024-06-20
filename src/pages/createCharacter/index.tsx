"use client";
import { AuthContext } from "@/context/AuthContext";
import { GameContext } from "@/context/GameContext";
import { db } from "@/firebase/config";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { type } from "os";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CharacterSchhema = z.object({
  cname: z.string(),
  ofen: z.number(),
  res: z.number(),
  hp: z.number(),
  int: z.number(),
});

type CharacterInput = z.infer<typeof CharacterSchhema>;

export default function CreateCharacter() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<CharacterInput>({
    resolver: zodResolver(CharacterSchhema),
  });
  const { user } = useContext(AuthContext);
  const { setNewCharacter } = useContext(GameContext);

  async function handleCreateCharacter(data: CharacterInput) {
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);
    const character = {
      name: data.cname,
      ofensiva: data.ofen,
      resistence: data.res,
      health: data.hp,
      inteligence: data.int,
      star: "fnmV3ob97CjOlbcLkddk",
      planet: 0,
      satelite: 500,
      planetLocation: 1,
    };
    setNewCharacter(character);

    if (userDocSnapshot.exists()) {
      // Document exists, update the chat
      const userDocRef = doc(db, `users/${user!.uid}`);

      await updateDoc(userDocRef, {
        character: character,
      });
    }
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateCharacter)}>
      <label>Nome:</label>
      <input type="text" {...register("cname")} />
      <label>Ofenciva:</label>
      <input type="number" {...register("ofen", { valueAsNumber: true })} />
      <label>Resistencia:</label>
      <input type="number" {...register("res", { valueAsNumber: true })} />
      <label>Hp:</label>
      <input type="number" {...register("hp", { valueAsNumber: true })} />
      <label>Inteligencia:</label>
      <input type="number" {...register("int", { valueAsNumber: true })} />

      <button type="submit" disabled={isSubmitting}>
        Criar
      </button>
    </form>
  );
}
