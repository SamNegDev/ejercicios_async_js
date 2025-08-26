
const pokemonNumber = () => {
    return Math.floor((Math.random() * 151) + 1);
};




const obtenerPokemon = async () => {
    const pokemonRandom = pokemonNumber();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonRandom}`);
    const resJson = await res.json();
    console.log(resJson);

    const img = document.querySelector(".random-image");
    img.src = resJson.sprites.other["official-artwork"].front_default;
    console.log(img);

    const div = document.getElementById("container");

    div.innerHTML = `
    <h2>#${resJson.id} - ${resJson.name.toUpperCase()}</h2>
    `;



}

obtenerPokemon();


