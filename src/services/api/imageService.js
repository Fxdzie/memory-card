import { fetchPokemonImages } from "./pokeApi";

export async function fetchImages(){
    try{
        return await fetchPokemonImages();
    } catch (error){
        console.warn("Primary API failed", error);
    }
}