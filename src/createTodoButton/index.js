import React from 'react'
import './createTodoButton.css'
import { TodoContext } from '../todoContext'

function CreateTodoButton ({toggleModal}) {
  const {setOpenModal} = React.useContext(TodoContext)
    return (
      <button 
        className='createTodoButton'
        //los eventos se escriben en camelcase 
        onClick={()=> {setOpenModal(true)}}
        >
        +
      </button>
    )
  }

export { CreateTodoButton }