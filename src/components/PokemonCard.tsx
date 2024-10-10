const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
];

function PokemonCard() {
  const pokemon = {
    name: pokemonList[0].name,
    img: pokemonList[0].imgSrc,
  };

  if (
    pokemon.img ===
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  ) {
    return (
      <figure>
        <figcaption>{pokemon.name}</figcaption>

        <img src={pokemon.img} alt={pokemon.name} />
      </figure>
    );
  } else {
    return <p>????????</p>;
  }
}

export default PokemonCard;
