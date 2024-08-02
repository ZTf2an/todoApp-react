import './styles/todolist.css'
function TodoList ( 
    // props    de esta manera al llamar a childre deberíamos hacer props.children. por eso es preferible usar la siguiente
    { children } 
) {
    return (
        <ul className='TodoList'>
            {/* la sigiente linea anexa los elementos hijos dentro del ul. */}
            {children}
        </ul>
    )
}

export { TodoList }