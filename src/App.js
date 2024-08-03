import React from 'react'
import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { CreateTodoButton } from './createTodoButton';
// import logo from './platzi.webp';

const defaultTodos = [
  {text : 'cortar cebolla' , completed : true},
  {text : 'Tomar Curso de React Js' , completed : false},
  {text : 'Llorar con la Llorona' , completed : true},
  {text : 'Lalalala' , completed : false},
]

function App() { 
  const [todos , setTodos] = React.useState(defaultTodos);
  const [searchValue , setSearchValue] = React.useState('');
  console.log(`los usuarios buscan todos de ${searchValue}`);

  const completedTodos = todos.filter(todo => todo.completed);
  const totalCompletedTodos = completedTodos.length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    todo => todo.text.toLowerCase()
      .includes(searchValue.toLowerCase())
  )

  // React para renderisarse solo debemos pasarle un elemento. por eso encapsulamos todo en el div .classname
  // si quisieramos que se renderisara todo sin estar dentro de un div, lo que debemos hacer es poner todo dentro de las etiquetas <React.Fragment></React.Fragment>, para esto deberíamos importar react
  // tambien sirve unicamente <></>
  return (
    <div className="App">
      {/* esta es la manera de isertar el componente al JSX */}
      <TodoCounter completed={totalCompletedTodos} total={totalTodos} />
      < TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      {/* <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList> */}

      {/* Una mejor forma de hacerlo es como se hace a continuacion */}
      {/* la consola devolverá error si no ponemos la key */}
      <TodoList>
        {searchedTodos.map( todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}



export default App;

