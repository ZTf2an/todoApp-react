import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../todoContext'
// las props "recibidas como parametro" deben ser como objeto, de la siguiente manera
function TodoCounter () {
  //se desempaquetan los props usando directamente el Use context, y se renombran las variables para poder usarlas tal cual como se tenían antes.
  const {totalTodos : total , totalCompletedTodos : completed} = React.useContext(TodoContext)
    let completado = total === completed
    return (
      <h1 
      // className={`${!total && "inactive"}`}
      >
        {(!total) ? "No hay tareas por realizar" : `Has completado ${completed} de ${total} ToDo` }
        
        <div className={`${!total && "inactive"}` }>
          {completado && "Felicitaciones, has completado todas las tareas"}
        </div>
      </h1>
    )
  }

  export {TodoCounter}