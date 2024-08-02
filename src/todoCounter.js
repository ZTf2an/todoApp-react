const estilos = {
  // debe enviarse en un objeto y en camelcase, (en css sería background-color : 'red')
  backgroundColor : 'red' ,
}
// las props "recibidas como parametro" deben ser como objeto, de la siguiente manera
function TodoCounter ({ total , completed }) {
    return (
      <h1 style={estilos}>
        Has completado {completed} de {total} ToDo
      </h1>
    )
  }

  export {TodoCounter}