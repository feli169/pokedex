import MyCard from '../MyCard/MyCard'


const Grilla = ({ pokes, selectedType }) => {

    let filteredPokes = pokes;

    if (selectedType) {
        filteredPokes = pokes.filter((poke) => {  //poke es el array de objeto
         return poke.types.some((typeObj) => typeObj.type.name === selectedType);//tipo de poke seleccionado
        });
    }

    return (
        <div className=' row mt-2'>
            {filteredPokes.map((poke) => (
                <MyCard
                    poke={poke}
                    key={poke.id} />
            ))
            }
        </div>
    )
}

export default Grilla
