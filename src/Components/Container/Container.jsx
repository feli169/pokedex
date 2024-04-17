import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Grilla from '../Grilla/Grilla'
import 'bootstrap/dist/css/bootstrap.min.css';
import AsideBar from '../AsideBar/AsideBar';

const Container = () => {

    const [selectedType, setSelectedType] = useState(null);
    const handleTypeChange = (type) => {
        setSelectedType(type);
      };

   const [pokes, setPokes] = useState([])
    const traerDatos = async () => {
        try {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=493')
            let jData = await data.json()
            let nombres = jData.results.map(pokemon => pokemon.name);
            let detallesPromises = nombres.map(async (nombre) => {
                let pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
                return pokemonData.json();
            });
            let detalles = await Promise.all(detallesPromises);


            setPokes(detalles)
   
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Por favor comuniquese con el administrador',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }


    }
    useEffect(() => {
        traerDatos();
    }, [])


    return (
        <div className='container'>
             <h1 className='text-center m-4 py-2'>Listado de Pokemon</h1>
            <AsideBar handleTypeChange={handleTypeChange}/>
           <Grilla selectedType={selectedType} pokes={pokes} />     
        </div>
    )
}

export default Container
