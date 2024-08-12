import React from 'react';
import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { CreateTodoButton } from '../createTodoButton';

function AppUi ({
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