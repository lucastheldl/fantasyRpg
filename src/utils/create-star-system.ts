import { db } from "@/firebase/config";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

export async function generateStarSystem() {
  const collectionRef = doc(collection(db, "galaxy"));

  const planets = generatePlanets();

  const star = {
    name: `Estrela ${generateName()}`,
    state: "ALIVE",
    leftDestination: "",
    rightDestination: "",
    planets: planets,
  };

  await setDoc(collectionRef, star);
}

function generatePlanets() {
  const orbits = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const types = ["rock", "liquid", "gas", "vegetation", "ice", "fire"];
  let planets: any = [];

  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    planets.push({
      name: `Planeta ${generateName()}`,
      type: types[Math.floor(Math.random() * types.length)],
      orbit: orbits[Math.floor(Math.random() * orbits.length)],
      cities: generatePlanetDestinations(),
      satelites: generateSatelites(),
    });
  }

  return planets;
}

function generateSatelites() {
  const orbits = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const types = ["rock", "liquid", "gas", "vegetation", "ice", "fire"];
  let satelites: any = [];

  for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
    satelites.push({
      name: `Lua ${generateName()}`,
      type: types[Math.floor(Math.random() * types.length)],
      orbit: orbits[Math.floor(Math.random() * orbits.length)],
      cities: generatePlanetDestinations(),
    });
  }

  return satelites;
}

function generatePlanetDestinations() {
  //const types = ["rock", "liquid", "gas", "vegetation", "ice", "fire"];
  let destination: any = [];

  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
    destination.push({
      name: `${generateName()}`,
    });
  }

  return destination;
}

function generateName() {
  const prefixes = [
    "Thra",
    "Zan",
    "Gor",
    "El",
    "Ald",
    "Vor",
    "Dra",
    "Di",
    "XK-",
    "LLS-",
  ];
  const suffixes = ["dor", "thor", "ian", "wyn", "gar", "el", "-303", "-100"];

  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return randomPrefix + randomSuffix;
}
