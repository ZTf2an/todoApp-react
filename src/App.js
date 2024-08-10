import React from 'react'
import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { CreateTodoButton } from './createTodoButton';
// import logo from './platzi.webp';

// const defaultTodos = [
//   {text : 'cortar cebolla' , completed : false},
//   {text : 'Tomar Curso de React Js' , completed : false},
//   {text : 'Llorar con la Llorona' , completed : false},
//   {text : 'Lalalala' , completed : false},
// ]

//se comentan las lineas de la 9 - 14 ya que esto se le va a pasar directamente en la consola de la aplicacion de la siguiente manera:
  //se copian las linas 9- 14 que es el array 
  // en consola se pega y de esa manera queda declarada la variable
  // let stringed = JSON.stringify(defaultTodos)
  // la anterior linea se pega en la consola declarando una variable que almacena los datos del array y los convierte en string
  // localStorage.setItem(stringed)
  // la anterior linea se escribe en consola y de esa manera queda almacenado en el local storage
  //al recargar la pagina aparecen los items

//Acontinuacion unas ayudas para solo descomentar, copiar , pegar en la consola
  // let stringied = JSON.stringify(defaultTodos); 
  // localStorage.setItem('TODOS_V1', stringied);

  // De la siguiente manera se resetea a la fuerza el TODOS_V1  
    // localStorage.removeItem('TODOS_V1')

function App() { 
//con la constante localStorageTodos almacenamos todos el valor en string del array que se almacena en TODOS_V1 en el local Storage de nuestra pagina
  const localStorageTodos = localStorage.getItem('TODOS_V1'); 
  // la siguiente linea se comenta para ser utilizada en la linea 51
  // let parsedTodos =  JSON.parse(localStorageTodos);

  //esta linea genera la variable en la que los TODOS están en blanco al iniciar la aplicación con el local storage en blanco.
  let parsedTodos = []

  if (!localStorageTodos) {
    //en este bloque va toda la logica que se ejecuta cuando el localStorage está vacio en el TODOS_V1 del local Storage
    // la siguiente linea pasa al local Storage el string vacio de los objetos 
    localStorage.setItem('TODOS_V1' , JSON.stringify([]))

    //si hay algo en el estado, lo borramos en la siguiente linea
    parsedTodos = []
  } else {
    //en este bloque se ejecuta toda la logica cuando el TODOS_V1 tiene informacion guardada.
    //Se envia actualiza la informacion extrayendo el string que está en local Storage y se convierte en json nuevamente usando el .parse 
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos , setTodos] = React.useState(parsedTodos);
  const [searchValue , setSearchValue] = React.useState('');
  console.log(`los usuarios buscan todos de ${searchValue}`);

  const completedTodos = todos.filter(todo => todo.completed);
  const totalCompletedTodos = completedTodos.length;
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    todo => todo.text.toLowerCase()
      .includes(searchValue.toLowerCase())
  )

  //la siguiente funcion se genera para que podamos guardar la informacion en el localStorage y actualice el estado. se usa esta funcion (en vez de saveTodos) en la linea 80 y 89
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1' , JSON.stringify(newTodos));

    setTodos(newTodos);
  }

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


  // React para renderisarse solo debemos pasarle un elemento. por eso encapsulamos todo en el div .classname
  // si quisieramos que se renderisara todo sin estar dentro de un div, lo que debemos hacer es poner todo dentro de las etiquetas <React.Fragment></React.Fragment>, para esto deberíamos importar react
  // tambien sirve unicamente <></>
  return (
    <div className="App">
      {/* esta es la manera de isertar el componente al JSX */}
      <TodoCounter completed={totalCompletedTodos} total={totalTodos}/>
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

