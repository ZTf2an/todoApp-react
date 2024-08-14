import React from "react";
function useLocalStorage ( itemName , initialValue ) {
  
  const [item , setItem] = React.useState(initialValue);
  const [load , setLoad] = React.useState(true);
  const [error , setError] = React.useState(false);
  
  
  React.useEffect(() =>{
    const localStorageItem = localStorage.getItem(itemName); 
    let parsedItem;
      if (!localStorageItem) {
        localStorage.setItem(itemName , JSON.stringify([initialValue]))
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
    });
    
  
  
    const saveItem = (newTodos) => {
      localStorage.setItem(itemName , JSON.stringify(newTodos));
    
      setItem(newTodos);
    }
    
    //se retorna como objeto en vez de array por lo general, cuando son mas de 2 elementos.
    return {load , error , item , saveItem}
  }

  export {useLocalStorage}