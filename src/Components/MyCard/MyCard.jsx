import './MyCard.css'

const MyCard = (poke) => {

    let web ="https://www.wikidex.net/wiki/"

    const { poke: innerPoke } = poke;
    console.log(poke)
    const name = innerPoke.name;

    const id = innerPoke.id
    const pokeid =id.toString();
    const idPokemon =pokeid.length ===1 ? "00" + pokeid :  
     pokeid.length===2?"0"+ pokeid :  pokeid ; pokeid;

    const Sprites = innerPoke.sprites.other;
    const offArt = Sprites['official-artwork'].front_default;

    const tipo = innerPoke.types;
   const duoType = tipo.length === 2;

    const typeName1 = tipo[0]
    const tipo1 = typeName1.type

    const typeName2 = tipo[1]
    const tipo2 = duoType ?  typeName2.type: null;

    return (
        <div className='col-md-3 p-4 text-center'>
            <div className="card ">
                <img src={offArt} className="card-img-top" alt="Aqui una foto" />
                <div className="card-body">
                    <h5 className="card-title text-center"> #{idPokemon} {name}</h5>
                    <p className="card-text text-center " id={tipo1.name} >
                        {tipo1.name} 
                    </p >
                    <p className="card-text text-center "id={tipo2?.name}>
                        {tipo2?.name}
                        </p>
                    <a href={web + name} className="btn btn-warning btn-sm text-center">Click more info</a>
                </div>
            </div>
        </div>
    )
}

export default MyCard
