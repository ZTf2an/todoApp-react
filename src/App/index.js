import React from 'react'
import { AppUi } from './AppUi'
// import { useLocalStorage } from './useLocalStorage';
import { TodoProvider } from '../todoContext';

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
  // todas las siguientes lineas son funciones que ahora se van a ejecutar desde el provider
  // const {item : todos , saveItem : saveTodos , loading , error} = useLocalStorage('TODOS_V1' , [])

  // const [searchValue , setSearchValue] = React.useState('');

  // const completedTodos = todos.filter(todo => todo.completed);
  // const totalCompletedTodos = completedTodos.length;
  // const totalTodos = todos.length

  // const searchedTodos = todos.filter(
  //   todo => todo.text.toLowerCase()
  //     .includes(searchValue.toLowerCase())
  // )

  // const completeTodos = (text) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex(
  //     todo => todo.text === text
  //   );
  //   newTodos[todoIndex].completed = true;
  //   saveTodos(newTodos)
  // };

  // const deleteTodos = (text) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex(
  //     todo => todo.text = text
  //   );
  //   newTodos.splice(todoIndex , 1)
  //   saveTodos(newTodos)
  // };

  return (
    <TodoProvider>
      <AppUi 
      // todas las siguientes lineas serán proveidas directamente desde el provider a los componentes
      // loading = {loading}
      // error = {error}
      // totalCompletedTodos={totalCompletedTodos}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // completeTodos={completeTodos}
      // deleteTodos={deleteTodos}
      // searchedTodos={searchedTodos}
      />    

    </TodoProvider>
  );
}

export default App;

