import './styles/TodoCounter.css'
// las props "recibidas como parametro" deben ser como objeto, de la siguiente manera
function TodoCounter ({ total , completed}) {
    return (
      <h1 
      // className={`${!total && "inactive"}`}
      >
        {(!total) ? "No hay tareas por realizar" : `Has completado ${completed} de ${total} ToDo` }
        
        <div className={`${!(total === completed) && "inactive"} ${!total && "inactive"}` }>
          Felicitaciones, has completado todas las tareas
        </div>
      </h1>
    )
  }

  export {TodoCounter}