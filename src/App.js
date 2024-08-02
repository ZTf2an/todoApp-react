import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { CreateTodoButton } from './createTodoButton';
// import { CreateTodoButton } from './createTodoButton';
// import logo from './platzi.webp';
import './App.css';

const defaultTodos = [
  {text : 'cortar cebolla' , completed : true},
  {text : 'Tomar Curso de React Js' , completed : true},
  {text : 'Llorar con la Llorona' , completed : true},
  {text : 'Lalalala' , completed : true},
]

function App() { 
  // React para renderisarse solo debemos pasarle un elemento. por eso encapsulamos todo en el div .classname
  // si quisieramos que se renderisara todo sin estar dentro de un div, lo que debemos hacer es poner todo dentro de las etiquetas <React.Fragment></React.Fragment>, para esto deberíamos importar react
  // tambien sirve unicamente <></>
  return (
    <div className="App">
      {/* esta es la manera de isertar el componente al JSX */}
      <TodoCounter completed={16} total={25} />
      < TodoSearch />

      {/* <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList> */}

      {/* Una mejor forma de hacerlo es como se hace a continuacion */}
      {/* la consola devolverá error si no ponemos la key */}
      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />

    </div>
  );
}



export default App;

