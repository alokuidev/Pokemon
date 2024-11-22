import { useEffect } from "react";
import { useState } from "react";
import Pokemoncardpractice from "./Pokemoncardpractice";

const Pokemonpractice = () =>{
    const [pokemon, setpokemon] = useState([]);
    const [searchData, setSearchData] = useState('');
    const APIurl = 'https://pokeapi.co/api/v2/pokemon?limit=120';
    
    const fetchApi = async () =>{
        try{
            const res  = await fetch(APIurl);
            const data = await res.json();
        
             const callNextApi = data.results.map(async (currElem) =>{
                const res = await fetch(currElem.url);
                const data = await res.json();
                return data
            })
            const firstFinalData = await Promise.all(callNextApi);
            setpokemon(firstFinalData)
            console.log(firstFinalData)
        }
        catch(error){
            console.log('Error: '+ error)
        }
    }

    useEffect(() =>{
        fetchApi();
    },[])

    const textfieldSearch = pokemon.filter((searchtext) => searchtext.name.toLowerCase().includes(searchData.toLowerCase()))
    
   return(
    <>
    <div className="header">
        <input type="text" placeholder="Search Pokémon..." value={searchData} onChange={(e)=> setSearchData(e.target.value)}  className="search-box"/>
    </div>
    <div className="card-container">
    {textfieldSearch.map((response) =>{
        return(
            <Pokemoncardpractice response={response} key={response.id}/>
        )
    })}
   </div></>
   )
}

export default Pokemonpractice;