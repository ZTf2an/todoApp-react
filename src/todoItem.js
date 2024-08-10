import './styles/todoitem.css'
import { FaCircleXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
function TodoItem ({text , completed , onComplete , onDelete}) {
    return (
      <li className="TodoItem">
        <FaCheck
        className={`Icon Icon-check ${completed && "Icon-check--active"}`} 
        onClick={onComplete}
        />
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        <FaCircleXmark 
        className='Icon Icon-delete'
        onClick={onDelete}
        />
      </li>
    );
  }

export {TodoItem}