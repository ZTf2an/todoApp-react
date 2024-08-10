import React from 'react'
import { TodoCounter } from '../todoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../todoList';
import { TodoItem } from '../todoItem';
import { CreateTodoButton } from '../createTodoButton';
import { useLocalStorage } from './useLocalStorage';

/* ---- bloque de actualizacion de localStorage en consola ---
const defaultTodos = [
  {text : 'cortar cebolla' , completed : false},
  {text : 'Tomar Curso de React Js' , completed : false},
  {text : 'Llorar con la Llorona' , completed : false},
  {text : 'Lalalala' , completed : false},
]

let stringied = JSON.stringify(defaultTodos); 
localStorage.setItem('TODOS_V1', stringied);

localStorage.removeItem('TODOS_V1')
*/

function App() { 
  const [todos , saveTodos] = useLocalStorage('TODOS_V1' , [])

  const [searchValue , setSearchValue] = React.useState('');
  // console.log(`los usuarios buscan todos de ${searchValue}`);

  const completedTodos = todos.filter(todo => todo.completed);
  const totalCompletedTodos = completedTodos.length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    todo => todo.text.toLowerCase()
      .includes(searchValue.toLowerCase())
  )


  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  };

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text = text
    );
    newTodos.splice(todoIndex , 1)
    saveTodos(newTodos)
  };


  return (
    <div className="App">
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

    </div>
  );
}



export default App;

