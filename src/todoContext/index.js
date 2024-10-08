import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider ({children}) {
    const {item : todos , saveItem : saveTodos , loading , error} = useLocalStorage('TODOS_V1' , [])

    const [searchValue , setSearchValue] = React.useState('');
    const [openModal , setOpenModal] = React.useState(false);
  
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

    const addNewTodo = (text) => {
      const newTodos = [...todos];
       newTodos.push({
        text,
        completed: false,

       })
      saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalCompletedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                completeTodos,
                deleteTodos,
                searchedTodos,
                openModal,
                setOpenModal,
                addNewTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext , TodoProvider}