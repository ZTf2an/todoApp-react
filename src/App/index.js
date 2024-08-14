import React from 'react'
import { AppUi } from './AppUi'
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
  return (
    <TodoProvider>
      <AppUi />    

    </TodoProvider>
  );
}

export default App;

