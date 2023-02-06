let poke_cards=document.querySelector(".poke_cards");
let open_card=document.querySelector(".open_card");
let open_card_blur=document.querySelector(".open_card_blur");
let boton_cerrar_carta=document.querySelector(".boton_cerrar_carta");


//OPEN CARD STATS
let open_card_hp=document.querySelector(".open_card_stat_hp");
let open_card_attack=document.querySelector(".open_card_stat_attack");
let open_card_defense=document.querySelector(".open_card_stat_defense");
let open_card_spattack=document.querySelector(".open_card_stat_spattack");
let open_card_spdefense=document.querySelector(".open_card_stat_spdefense");
let open_card_speed= document.querySelector(".open_card_stat_speed");

function cerrarCartaAbierta(){
    open_card_blur.style.display= "none";
    let open_card_img=document.querySelector(".open_card_img");
    open_card_img.innerHTML="";
    let open_card_types=document.querySelector(".open_card_types");
    open_card_types.innerHTML="";

};

boton_cerrar_carta.addEventListener("click",()=>{
    cerrarCartaAbierta();
})

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
    nueva_carta.appendChild(poke_types);

    //FUNCION ABRIR CARTA
    nueva_carta.addEventListener("click",()=>{
        abrirCarta(pokemon);
    });

    //AGREGAR CARTA
    poke_cards.appendChild(nueva_carta);
}

function abrirCarta(pokemon){

    //IMAGEN
    let open_card_img=document.querySelector(".open_card_img");
    let poke_img=document.createElement("img");
    let poke_img2=document.createElement("img");
    poke_img.src=`${pokemon.sprites.front_default}`;
    poke_img2.src=`${pokemon.sprites.back_default}`;
    poke_img2.alt=``;
    open_card_img.appendChild(poke_img);
    open_card_img.appendChild(poke_img2);


    //NOMBRE
    let open_card_name=document.querySelector(".open_card_name");
    open_card_name.innerText=`${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;

    //TIPOS
    let open_card_types=document.querySelector(".open_card_types");
        pokemon.types.forEach(type=>{
            let poke_type=document.createElement("div");
            poke_type.classList.add("type_container_in_card");
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
            open_card_types.appendChild(poke_type);
        })


    //STATS
    pokemon.stats.forEach(stat=>{
        switch(stat.stat.name){

            case "hp":
                let hp_bar=document.querySelector(".bar_hp");
                hp_bar.style.width=`${(stat.base_stat)}px`;
                open_card_hp.innerText=`${stat.base_stat}`;
                break;

            case "attack":
                let attack_bar=document.querySelector(".bar_attack");
                attack_bar.style.width=`${(stat.base_stat)}px`;
                open_card_attack.innerText=`${stat.base_stat}`;
                break;

            case "defense":
                let defense_bar=document.querySelector(".bar_defense");
                defense_bar.style.width=`${(stat.base_stat)}px`;
                open_card_defense.innerText=`${stat.base_stat}`;
                break;

            case "special-attack":
                let spattack_bar=document.querySelector(".bar_spattack");
                spattack_bar.style.width=`${(stat.base_stat)}px`;
                open_card_spattack.innerText=`${stat.base_stat}`;
                break;

            case "special-defense":
                let spdefense_bar=document.querySelector(".bar_spdefense");
                spdefense_bar.style.width=`${(stat.base_stat)}px`;
                open_card_spdefense.innerText=`${stat.base_stat}`;
                break;

            case "speed":
                let speed_bar=document.querySelector(".bar_speed");
                speed_bar.style.width=`${(stat.base_stat)*1.1}px`;
                open_card_speed.innerText=`${stat.base_stat}`;
                break;
        }
    }) 

    setTimeout(()=>{open_card_blur.style.display="grid"},270);
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