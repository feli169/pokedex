
const AsideBar = ({handleTypeChange}) => {

    const handleFilterClick = (type) => {
        handleTypeChange(type);
      };
        return (

// handleFilterCLick encargado de hacer el filtro  por tipo. la props handleType change es
//  para que se actualice en App y pueda filtra solo el tipo seleccionado

    <div className="text-center">
        <ul className="nav-list d-flex flex-wrap gap-2 ">
                <li> <button className="btn" onClick={() => handleFilterClick(null)} id="ver-todos">Ver todos</button></li> 
                <li ><button className="btn" onClick={() => handleFilterClick('normal')} id="normal">Normal</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('fire')} id="fire">Fire</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('water')} id="water">Water</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('grass')} id="grass">Grass</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('electic')} id="electric">Electric</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('ice')} id="ice">Ice</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('fighting')} id="fighting">Fighting</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('poison')} id="poison">Poison</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('ground')} id="ground">Ground</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('flying')} id="flying">Flying</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('psychic')} id="psychic">Psychic</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('bug')} id="bug">Bug</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('rock')} id="rock">Rock</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('ghost')} id="ghost">Ghost</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('dark')} id="dark">Dark</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('dragon')} id="dragon">Dragon</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('steel')} id="steel">Steel</button></li>
                <li ><button className="btn" onClick={() => handleFilterClick('fairy')} id="fairy">Fairy</button></li>
            </ul>
    </div>
  )
}

export default AsideBar
