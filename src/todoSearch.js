import './styles/todoSearch.css'

function TodoSearch ({searchValue , setSearchValue}) {
    return (
        <input 
            className="searcher" 
            placeholder="cortar cebolla" 
            value = { searchValue }
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}
        />
    )
}

export {TodoSearch}