import React from 'react';
import { TodoContext } from '../todoContext'
import './todoModal.css'


function TodoModal () {
    const { setOpenModal , addNewTodo} = React.useContext(TodoContext);

    const [newTodoValue , setNewTodoValue] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addNewTodo(newTodoValue);
        setOpenModal(false);        
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return( 
        <form className="form" onSubmit={onSubmit}>
            <span className="title">Escribe tu nuevo TODO.</span>
            <textarea 
                placeholder='Cortar Cebolla'
                value = {newTodoValue}
                onChange={onChange}
            />
            <div>
                <button 
                    type='button'
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button--cancel'
                >Cancelar
                </button>
                <button 
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >Agregar
                </button>
            </div>
        </form>

    )
}

export { TodoModal }