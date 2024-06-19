import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "@/context/GameContext";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from "@/context/AuthContext";
import { PlanetContainer, StarContainer } from "@/styles/components/planet";
import { Container, Orbit, Wrapper } from "@/styles/home";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user } = useContext(AuthContext);
  const { character, setNewCharacter } = useContext(GameContext);
  const [location, setLocation] = useState<any | null>(null);
  const [inPlanet, setInPlanet] = useState<any | null>(null);

  function handleGoToPlanet(p: any) {
    setInPlanet(p);
  }

  useEffect(() => {
    async function fetchCharacter() {
      if (!user) {
        return;
      }
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNewCharacter(docSnap.data().character);
      } else {
        console.log("No such document!");
      }
    }
    fetchCharacter();
  }, [user]);

  useEffect(() => {
    async function getCharPos() {
      if (!character) {
        return;
      }
      const docRef = doc(db, "galaxy", character.star);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLocation(docSnap.data());
      } else {
      }
    }
    getCharPos();
  }, [character]);
  return (
    <>
      <Head>
        <title>Rpg</title>
        <meta name="Fantasy Rpg" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        {!inPlanet ? (
          <Container>
            {location && character && (
              <p>
                {character.planet == 500
                  ? location.name
                  : character.city == 500
                  ? location.planets[character.planet].name
                  : location.planets[character.planet].cities[character.city]
                      .name}
              </p>
            )}
            <Orbit>
              {location && <StarContainer title={location.name} />}
              {location &&
                location.planets.map((p: any, i: number) => {
                  return (
                    <PlanetContainer
                      onClick={() => handleGoToPlanet(p)}
                      key={i}
                      title={p.name}
                      orbit={p.orbit}
                    />
                  );
                })}
            </Orbit>
          </Container>
        ) : (
          <Container>
            <PlanetContainer title={inPlanet.name} orbit={"display"} />
            {inPlanet.satelites &&
              inPlanet.satelites.lenght != 0 &&
              inPlanet.satelites.map((m: any, i: number) => {
                console.log(m);
                return (
                  <PlanetContainer
                    onClick={() => handleGoToPlanet(m)}
                    key={i}
                    title={m.name}
                    orbit={"lg"}
                    color={"gray"}
                  />
                );
              })}
          </Container>
        )}
      </Wrapper>
    </>
  );
}
