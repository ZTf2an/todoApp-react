import React from 'react';
import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodosLoading } from '../todosLading';
import { TodoContext } from '../todoContext';
import { Modal } from '../Modal';
import { TodoModal } from '../todoModal'


function AppUi () {
  const {
    loading,
    error , 
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal
  } = React.useContext(TodoContext);
    return (<div className="App">
      <TodoCounter />
      < TodoSearch />
      <TodoList>
        {loading && <TodosLoading/>}
        {error && <p>Rayos!! ha habido un error.</p>}
        {(!loading && searchedTodos.length === 0) && <p>Crea un nuevo Todo</p>}

        {searchedTodos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoModal></TodoModal>
        </Modal>

      )}

    </div>)
}

export {AppUi}