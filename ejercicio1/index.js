
const img = document.querySelector(".character-image");
const div = document.getElementById("img-container");
const select = document.getElementById("character-list");
const defaultOption = document.createElement("option");
defaultOption.textContent = "-- Selecciona un personaje --";
defaultOption.value = "";
select.appendChild(defaultOption);

const obtenerDatos = async () => {
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters");
        const response = await res.json();
        return response;

    } catch (error) {
        console.log("Se ha producido un error");
    }
}

const crearSelect = async () => {

    const gotCharacters = await obtenerDatos();

    for (const character of gotCharacters) {
        const option = document.createElement("option");
        option.value = character.fullName;
        option.textContent = character.fullName;
        select.appendChild(option);
    }

    select.addEventListener("change", (input) => {
        const personaje = gotCharacters.find(char => char.fullName === input.target.value);
        img.src = personaje.imageUrl;
    });
};

crearSelect();


