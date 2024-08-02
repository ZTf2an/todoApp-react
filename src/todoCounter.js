// las props "recibidas como parametro" deben ser como objeto, de la siguiente manera
function TodoCounter ({ total , completed }) {
    return (
      <h1>
        Has completado {completed} de {total} ToDo
      </h1>
    )
  }

  export {TodoCounter}