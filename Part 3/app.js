//1.
baseURL = "https://pokeapi.co/api/v2";
speciesURL = `${baseURL}/pokemon-species`;
// $.getJSON(`${baseURL}/pokemon`).then((data) => {
//   console.log(data);
// });

//2.
pokemonPromiseArr = [];

$.getJSON(`${baseURL}/pokemon?limit=1000`).then((pokemonData) => {
  //   console.log(pokemonData.results[370]);

  // make an array of random Pokemon indices
  randomPokemonArr = Array.from({ length: 3 }, (x) => getRandomNum(999));
  //   console.log(randomPokemonArr);

  randomPokemonArr.forEach((index) => {
    // $.getJSON(`${baseURL}/pokemon/${index}`);
    let pokemonPromise = pokemonData.results[index];
    // console.log(pokemonPromise);
    pokemonPromiseArr.push(pokemonPromise);
  });
  //   console.log(pokemonPromiseArr);
  return Promise.all(pokemonPromiseArr).then((pokemonArr) => {
    // console.log(pokemonArr);
    pokemonArr.forEach((pokemon) => {
      let name = pokemon.name;
      $.getJSON(`${speciesURL}/${name}`).then((species) => {
        flavorTextEntries = species.flavor_text_entries;
        console.log(flavorTextEntries);
        const pokemonDict = {};
        let count = 0;
        while (count < flavorTextEntries.length) {
          if (flavorTextEntries[count].language.name == "en") {
            // let chosen_pokemon = name;
            // let text = flavor.flavor_text;
            console.log(flavorTextEntries[count].language.name);
            count = 999;
            // console.log(text);
          }
        }
        // console.log(flavorTextEntries);
        // console.log(flavor_text[0].language);
      });
    });
  });
});

//3.

function getRandomNum(max) {
  randNum = Math.floor(Math.random() * max);

  return randNum;
}
