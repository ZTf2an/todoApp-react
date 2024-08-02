// las props "recibidas como parametro" deben ser como objeto, de la siguiente manera
function TodoCounter ({ total , completed }) {
    return (
      <h1 style={{
        // las propiedades se envian en camelcase
        // fontSize : 24 , se puede enviar así, y react lo renderisa como 24 px, sin embargo es mejor enviar el string para ser mas especifico.
        fontSize : '24px' ,
        textAlign : 'center' ,
        margin : 0,
        padding : '48px'
      }}>
        Has completado {completed} de {total} ToDo
      </h1>
    )
  }

  export {TodoCounter}