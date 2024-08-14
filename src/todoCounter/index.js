import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../todoContext'

function TodoCounter () {
  const {totalTodos : total , totalCompletedTodos : completed} = React.useContext(TodoContext)
    let completado = total === completed
    return (
      <h1>
        {(!total) ? "No hay tareas por realizar" : `Has completado ${completed} de ${total} ToDo` }
        
        <div className={`${!total && "inactive"}` }>
          {completado && "Felicitaciones, has completado todas las tareas"}
        </div>
      </h1>
    )
  }

  export {TodoCounter}