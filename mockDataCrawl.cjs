// generate_mock_data.js
const fs = require("fs");
const axios = require("axios");

const MAX_POKEMON = 151;

async function fetchPokemon(id) {
  const [basicRes, speciesRes] = await Promise.all([
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  ]);

  return {
    id: basicRes.data.id,
    name: capitalize(basicRes.data.name),
    type: capitalize(basicRes.data.types[0].type.name),
    image: basicRes.data.sprites.front_default,
    description: getEnglishDescription(speciesRes.data.flavor_text_entries),
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getEnglishDescription(entries) {
  const entry = entries.find(e => e.language.name === "en");
  return entry ? entry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ') : "No description.";
}

async function main() {
  const results = [];

  for (let i = 1; i <= MAX_POKEMON; i++) {
    try {
      const data = await fetchPokemon(i);
      results.push(data);
      console.log(`Fetched: ${data.name}`);
    } catch (err) {
      console.error(`Failed to fetch ID ${i}`, err.message);
    }
  }

  const output = `import { Pokemon } from './MOCK_DATA';

export const MOCK_DATA: Pokemon[] = ${JSON.stringify(results, null, 2)};
`;

  fs.writeFileSync("./src/data/MOCK_DATA.ts", output, "utf-8");
  console.log("MOCK_DATA.ts 생성 완료!");
}

main();
