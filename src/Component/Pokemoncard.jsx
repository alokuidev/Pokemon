/* eslint-disable react/prop-types */
const Pokemoncard = ({res}) =>{
    
    return(
        <div className="pokemon-card" key={res.id}>
      <div className="card-header">
        <h2>{res.name}</h2>
        <span>#{res.order}</span>
      </div>
      <div className="card-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"/>
      </div>
      <div className="card-details">
        <p><strong>Type:</strong> Electric</p>
        <p><strong>HP:</strong> {res.stats[0].base_stat}</p>
      </div>
    </div>
    )
}

export default Pokemoncard;