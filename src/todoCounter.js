import './styles/TodoCounter.css'
// las props "recibidas como parametro" deben ser como objeto, de la siguiente manera
function TodoCounter ({ total , completed}) {
    return (
      <h1>
        Has completado {completed} de {total} ToDo
        <div className={`${!(total == completed) && "inactive"}`}>
          Felicitaciones, has completado todas las tareas
        </div>
      </h1>
    )
  }

  export {TodoCounter}