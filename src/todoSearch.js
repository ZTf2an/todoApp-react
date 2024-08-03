import './styles/todoSearch.css'
function TodoSearch () {
    return (
        <input 
            className="searcher" 
            placeholder="cortar cebolla" 
            onChange={(event) => {
                console.log('Escribiste en el TodoSearch');
                console.log(event);
                console.log(event.target.value)
            }}
        />
    )
}

export {TodoSearch}