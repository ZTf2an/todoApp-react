import './styles/todoitem.css'
//la siguiente es la manera de importar iconos de la librería react-icons
// se debe importar react-icons con la npm
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
function TodoItem ({text , completed , onComplete , onDelete}) {
    return (
      <li className="TodoItem">
        {/* <span 
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
        >V</span> */}
        <FaCheck
        className={`Icon Icon-check ${completed && "Icon-check--active"}`} 
        onClick={onComplete}
        />
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        {/* <span 
        className='Icon Icon-delete'
        onClick={onDelete}
        >X</span> */}
        <FaCircleXmark 
        className='Icon Icon-delete'
        onClick={onDelete}
        />
      </li>
    );
  }

export {TodoItem}