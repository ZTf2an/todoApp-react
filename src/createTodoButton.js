import './styles/createTodoButton.css'
function CreateTodoButton () {
    return (
        
      <button 
        className='createTodoButton'
        //los eventos se escriben en camelcase 
        onClick={(event) => {
            console.log('le diste click')
            // nos devuelve el texto
            console.log(event)
            //nos devuelve el evento y todas las propiedades del evento
            console.log(event.target)
            //nos devuelve el elemento html desde donde se ejecutó, en este caso <button class="CreateTodoButton"></button>
        }}
        >
        +
      </button>
    )
  }

export { CreateTodoButton }