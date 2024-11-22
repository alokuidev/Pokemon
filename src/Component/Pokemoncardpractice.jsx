import './Pokemon.css'
/* eslint-disable react/prop-types */
const Pokemoncardpractice = ({response}) =>{
    
    return(
        <div className="pokemon-card" key={response.id} >
      <div className="card-header">
        <h2>{response.name}</h2>
        <span>{response.order}</span>
      </div>
      <div className="card-image">
        <img src={response.sprites.other.dream_world.front_default} alt={response.name}/>
      </div>
      <div className="card-details">
        <p><strong>Type:</strong> powers</p>
        <p><strong>HP:</strong> 51</p>
      </div>
    </div>
    )
}

export default Pokemoncardpractice;