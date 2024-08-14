import React from 'react'
import './todoSearch.css'
import { TodoContext } from '../todoContext'

function TodoSearch (
        // ya no vamos a recibir estos props, sino que accederémos directamente al contexten la linea 10
        // {searchValue , setSearchValue}
    ) {
    //desempaquetamos solo los dos datos que necesitamos, los cuales llegan desde el todoContext
    const {searchValue , setSearchValue} = React.useContext(TodoContext)
    return (
        <input 
            className="searcher" 
            placeholder="cortar cebolla" 
            value = { searchValue }
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    )
}

export {TodoSearch}