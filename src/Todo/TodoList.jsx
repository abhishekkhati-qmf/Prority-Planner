import { MdCheck, MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
  onHandleEditTodo,
}) => {
  const HandleEditNotTodo = () => {
  toast.warning("⚠️ You can't edit a todo if it is marked!", {
    position: "bottom-right",
    autoClose: 2000, // 2000ms = 2 seconds
    className: "toast", // Using the toast class for styling
    style: {
      backgroundColor: '#001f29', // Matching background color
      color: '#fff', // Text color
      fontSize: '1.6rem', // Font size for consistency
      padding: '1.2rem 2rem', // Padding to match other buttons
      borderRadius: '12px', // Rounded corners
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px', // Box shadow for a subtle effect
    },
  });
};
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button
          className="edit-btn"
          onClick={checked?HandleEditNotTodo:() => onHandleEditTodo(data, checked)}
        >
          <FaEdit />
        </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
