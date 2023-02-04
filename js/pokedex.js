let poke_cards=document.querySelector(".poke_cards");

function agregarCarta(pokemon){
    //CARTA
    let nueva_carta=document.createElement("div");
    nueva_carta.classList.add("poke_carta");

    //IMG
    let poke_img_container=document.createElement("div");
    poke_img_container.classList.add("poke_img_container");

    let poke_img=document.createElement("img");
    poke_img.src=pokemon.sprites.front_default;

    poke_img_container.appendChild(poke_img);

    //NOMBRE
    let poke_name=document.createElement("p");
    poke_name.classList.add("poke_name");
    poke_name.innerText=pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    //STATS
    // let poke_stats=document.createElement("div");
    // pokemon.stats.forEach(stat=>{
    //     let sub_stat=document.createElement("div");

    //     let stat_name=document.createElement("div");
    //     stat_name.classList.add("stat_name");
    //     stat_name.innerText=stat.stat.name;

    //     let stat_value=document.createElement("div");
    //     stat_value.innerText=stat.base_stat;

    //     sub_stat.appendChild(stat_name);
    //     sub_stat.appendChild(stat_value);

    //     poke_stats.appendChild(sub_stat);
    // })

    //TIPOS
    let poke_types=document.createElement("div");
    poke_types.classList.add("poke_types");
        pokemon.types.forEach(type=>{
            let poke_type=document.createElement("div");
            poke_type.classList.add("type_container");
            switch (type.type.name){

                case "grass":
                    poke_type.classList.add("type_grass");
                    break;

                case "fire":
                    poke_type.classList.add("type_fire");
                    break;

                case "water":
                    poke_type.classList.add("type_water");
                    break;

                case "flying":
                    poke_type.classList.add("type_flying");
                    break;

                case "bug":
                    poke_type.classList.add("type_bug");
                    break;

                case "poison":
                    poke_type.classList.add("type_poison");
                    break;

                case "normal":
                    poke_type.classList.add("type_normal");
                    break;

                case "ground":
                    poke_type.classList.add("type_ground");
                    break;

                case "ground":
                    poke_type.classList.add("type_ground");
                    break;
                
                case "electric":
                    poke_type.classList.add("type_electric");
                    break;
                
                case "psychic":
                    poke_type.classList.add("type_psychic");
                    break;

                case "ghost":
                    poke_type.classList.add("type_ghost");
                    break;
                
                case "fairy":
                    poke_type.classList.add("type_fairy");
                    break;
                
                case "ice":
                    poke_type.classList.add("type_ice");
                    break;

                case "fighting":
                    poke_type.classList.add("type_fighting");
                    break;
                
                case "dark":
                    poke_type.classList.add("type_dark");
                    break;
                
                case "rock":
                    poke_type.classList.add("type_rock");
                    break;

                case "dragon":
                    poke_type.classList.add("type_dragon");
                    break;

                case "steel":
                    poke_type.classList.add("type_steel");
                    break;

                case "rock":
                    poke_type.classList.add("type_rock");
                    break;

            }
            poke_type.innerText=type.type.name;
            poke_types.appendChild(poke_type);
        })

    //ARMAR CARTA
    nueva_carta.appendChild(poke_img_container);
    nueva_carta.appendChild(poke_name);
    // nueva_carta.appendChild(poke_stats);
    nueva_carta.appendChild(poke_types);

    //AGREGAR CARTA
    poke_cards.appendChild(nueva_carta);
}



fetch('https://pokeapi.co/api/v2/pokemon?limit=905',)
.then((response) => response.json())
.then((data) => {
    let pokes=data.results;
    console.log(pokes);
    pokes.forEach(poke => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((response)=> response.json())
        .then((datos)=>{
            agregarCarta(datos)
        })
    });
});