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

   const [pokes, setPokes] = useState([])// en pokes almacenaremos todos los datos de los pkemon
    const traerDatos = async () => {
        try {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=493')//llamamos a la api
            let jData = await data.json()//transformamos los datos a json
            let nombres = jData.results.map(pokemon => pokemon.name);//como los datos tienen un array 
            //dentro de otro hay quesacar esos datos con metodo .map

            let detallesPromises = nombres.map(async (nombre) => {
                let pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
                return pokemonData.json();
            });
            let detalles = await Promise.all(detallesPromises); //  esperamos que todas las 
            //promesas esten listas para continuar


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
           <Grilla selectedType={selectedType} pokes={pokes} /></div>// muestra los pokemon en la grilla
           // respecto al tipo que se selccionna
    )
}

export default Container
