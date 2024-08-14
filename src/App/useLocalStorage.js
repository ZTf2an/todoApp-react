import React from "react";
function useLocalStorage ( itemName , initialValue ) {
  
  const [item , setItem] = React.useState(initialValue);
  const [loading , setLoading] = React.useState(true);
  const [error , setError] = React.useState(false);
  
  
  React.useEffect(() =>{
    // se necesitó poner el set Timeout para simular la espera del efecto. al parecer el efecto se dee usar con promesas para que no se cargue infinitamente.
      //si no se le pone el setTimeout se queda renderisando infinitamente.
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); 
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName , JSON.stringify([initialValue]))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
        setError(true);
      }
      
    }, 2000);
  
  //se debe poner el array vacio para qe no caiga en un bucle infinito
  },[ ]);
    
  
  
    const saveItem = (newTodos) => {
      localStorage.setItem(itemName , JSON.stringify(newTodos));
    
      setItem(newTodos);
    }
    
    //se retorna como objeto en vez de array por lo general, cuando son mas de 2 elementos.
    return {loading , error , item , saveItem}
  }

  export {useLocalStorage}