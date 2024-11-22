/* eslint-disable react/prop-types */
const Pokemoncard = ({res}) =>{
    
    return(
        <div className="pokemon-card" key={res.id}>
      <div className="card-header">
        <h2>{res.name}</h2>
        <span>#{res.order}</span>
      </div>
      <div className="card-image">
        <img src={res.sprites.other.dream_world.front_default} alt={res.name}/>
      </div>
      <div className="card-details">
        <p><strong>Type:</strong> {res.types.map((Ptype) => Ptype.type.name).join(', ')
                //index === res.types.length - 1 ? Ptype.type.name : Ptype.type.name+','
             
         }</p>
        <p><strong>HP:</strong> {res.stats[0].base_stat}</p>
      </div>
    </div>
    )
}

export default Pokemoncard;