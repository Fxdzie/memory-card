const NEKOSIA_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=12";

async function fetchPokemonSprite(pokemonUrl){
  const response = await fetch(`${pokemonUrl}`);

  if (!response.ok) {
    throw new Error(`Nekosia API error: ${response.status}`);
  }

  const result = await response.json();
  const image = result.sprites.front_default;
  return image;
}

export async function fetchPokemonImages() {
  const response = await fetch(
    `${NEKOSIA_API_URL}`
  );

  if (!response.ok) {
    throw new Error(`Nekosia API error: ${response.status}`);
  }

  const result = await response.json();
  const transformedImages = result.results.map( item=>({
    id: item.name,
    image: {
      original: {
        url: fetchPokemonSprite(item.url)
      }
    }
  }));
   
  return {images: transformedImages};
}