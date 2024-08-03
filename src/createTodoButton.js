import './styles/createTodoButton.css'
function CreateTodoButton () {
    return (
        
      <button 
        className='createTodoButton'
        //los eventos se escriben en camelcase 
        onClick={() => console.log('le diste click')}
        >
        +
      </button>
    )
  }

export { CreateTodoButton }