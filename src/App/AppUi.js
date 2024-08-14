import React from 'react';
import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodosLoading } from '../todosLading';

function AppUi ({
  //se debe recibir los props load y error para ser usados en la UI
    loading,
    error,
    totalCompletedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    completeTodos,
    deleteTodos,
    searchedTodos
}) {
    return (<div className="App">
      <TodoCounter completed={totalCompletedTodos} total={totalTodos}/>
      < TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>
        {/* la idea es que  en las siguientes 3 lineas se valide si hay errores, si está cargando, si no hay todos. y el p de cada evento*/}
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
    </div>)
}

export {AppUi}