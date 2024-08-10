import React from 'react'
import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { CreateTodoButton } from './createTodoButton';

/* bloque de actualizacion de localStorage en consola
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

// se generó el custom hook useLocalStorage, para alacenar en el toda la logica que se desarrolla utilizando el local Storage que estaba sobre cargando de informacion nuestro componente App()
function useLocalStorage ( itemName , initialValue ) {
  //se trae esta linea la cual pasabe en el .getItem el valor 'TODOS_V1', ahora este valor se le enviará directamente con itemName
  const localStorageItem = localStorage.getItem(itemName); 

  //se declara la variable vacia para actualizarla según lo que se envie en initial value. ver linea 31
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName , JSON.stringify([initialValue]))
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  // se trae esta linea que es la que actualizará el estado de los TODOS,
  const [item , setItem] = React.useState(parsedItem);

  //se trae esta función que es la encargada de actualizar el estado y de actualizar la informacion que se envia al Local Storage
  const saveItem = (newTodos) => {
    localStorage.setItem(itemName , JSON.stringify(newTodos));
  
    setItem(newTodos);
  }

  // por ultimo se retorna el un array con el estado, y la funcion que actualiza el estado 
  return [item , saveItem]
}

function App() { 

  // de esta manera se extrae toda la informacion de useLocalStorage, destructurando el array extrayendo el estado y la funcion que actualiza el estado.
  // al ser un array no es necesario que tenga el mismo nombre que está en el return de la funcion useLocalStorage, linea 47  
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

