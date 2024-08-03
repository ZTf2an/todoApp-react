import './styles/todoSearch.css'
//importaremos react para usar "el estado"
import React from 'react'

function TodoSearch () {
    //creamos la constante que nos traerá el estado
    // const [state , setState ,] =React.useState();
    //de la anterior manera se puede hacer, pero no es obligatorio el nombre

    const [searchValue , setSearchValue] = React.useState('');

    console.log(`los usuarios buscan todos de ${searchValue}`)

    return (
        <input 
            className="searcher" 
            placeholder="cortar cebolla" 
            //en la siguiente linea se programa el input para que el valor de searchValue del estado sea el que se está ingresando.
            value = { searchValue }
            onChange={(event) => {
                //en esta linea se acualiza el estado ya que en useState() hay un string vacío, se actualizará el estado con lo que ingrese al input
                setSearchValue(event.target.value)
            }}
        />
    )
}

export {TodoSearch}