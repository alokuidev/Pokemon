import { useEffect } from 'react';
import './Pokemon.css'
import { useState } from 'react';
import  Pokemoncard  from './Pokemoncard';

const Pokemon = () =>{

    const [pokemon , setPokemon] = useState([])

    const APIUrl = 'https://pokeapi.co/api/v2/pokemon?limit=30';

    const fetchApi = async () =>{
        try{
            const res = await fetch(APIUrl)
            const data  = await res.json();
            const deatiledPokemonData = data.results.map(async (currPokemon) =>{
                const res  = await fetch(currPokemon.url);
                const data = await res.json();
                return data;  
            })
            //console.log(deatiledPokemonData)
            const deatiledPokemonResponse = await Promise.all(deatiledPokemonData)
            console.log(deatiledPokemonResponse)
            setPokemon(deatiledPokemonResponse)
        }
        catch(error)
        {
            console.log("Error: "+ error)
        }
         
    }

    useEffect(() =>{
        fetchApi(); 
    },[])
    return(
        <>
    <div className="header">
        <input type="text" placeholder="Search Pokémon..." className="search-box"/>
    </div>
    <div className="card-container">
    {pokemon.map((res) =>{
        return(

    
            <Pokemoncard res={res} key={res.id}/>
   
    )
})}
    
    
    
    {/* <!-- Add more Pokémon cards as needed --> */}
  </div>
        </>
    )
}

export default Pokemon;