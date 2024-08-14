import React from 'react';
import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { CreateTodoButton } from '../createTodoButton';
import { TodosLoading } from '../todosLading';
import { TodoContext } from '../todoContext';

function AppUi ({
  //todos estos parametros ya no se van a recibir desde aqui sino que seran preveidas a cada componente
    // loading,
    // error,
    // totalCompletedTodos,
    // totalTodos,
    // searchValue,
    // setSearchValue,
    // completeTodos,
    // deleteTodos,
    // searchedTodos
}) {
    return (<div className="App">
      <TodoCounter 
        // completed={totalCompletedTodos} total={totalTodos}
      />
      < TodoSearch 
        // searchValue={searchValue} setSearchValue={setSearchValue}
      />

      <TodoContext.Consumer>
        {( {loading , error , searchedTodos , completeTodos , deleteTodos} )=> (
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
        )}
      </TodoContext.Consumer>
      

      <CreateTodoButton />
    </div>)
}

export {AppUi}