import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [inputValue,setInputValue] = useState({ id: "", content: "", checked: false });
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    let newcontent = content.trim();

    //to check if the input field is empty or not
    if (!newcontent) return;

    //to check the data is already existing or not
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === newcontent
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content: newcontent, checked }]);
  };

  // Todo add data to local storage
  setLocalStorageTodoData(task);

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((currtask) => currtask.content !== value);
    setTask(updatedTask);
  };

  //todo handleClearTodoData functionality
  const handleClearTodoData = () => {
    setTask([]);
  };

  //todo handleCheackedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((currtask) => {
      if (currtask.content === content) {
        return { ...currtask, checked: !currtask.checked };
      } else {
        return currtask;
      }
    });
    setTask(updatedTask);
  };

  //todo handleEditTodo functionality

  const handleEditTodo = (content,checked) => {
      handleDeleteTodo(content);
      setInputValue({id:content,content,checked});
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Priority Planner</h1>
        <TodoDate />
      </header>
      <TodoForm inputValue={inputValue} setInputValue={setInputValue} onAddTodo={handleFormSubmit} />
      <section className="myUnordList">
        <ul>
          {task.map((currtask) => {
            return (
              <TodoList
                key={currtask.id}
                data={currtask.content}
                checked={currtask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
                onHandleEditTodo={handleEditTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all{" "}
        </button>
      </section>
    </section>
  );
};
