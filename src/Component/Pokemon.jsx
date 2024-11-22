import { useEffect } from 'react';
import './Pokemon.css'
import { useState } from 'react';
import  Pokemoncard  from './Pokemoncard';

const Pokemon = () =>{

    const [pokemon , setPokemon] = useState([])
    const [searchData, setSearchData] = useState('');
    const APIUrl = 'https://pokeapi.co/api/v2/pokemon?limit=120';

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
            //console.log(deatiledPokemonResponse)
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

    const filterData = pokemon.filter((currCard) => currCard.name.toLowerCase().includes(searchData.toLowerCase()));
    
    return(
        <>
    <div className="header">
        <input type="text" placeholder="Search Pokémon..." value={searchData} onChange={(e)=> setSearchData(e.target.value)}  className="search-box"/>
    </div>
    <div className="card-container">
    {filterData.map((res) =>{
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