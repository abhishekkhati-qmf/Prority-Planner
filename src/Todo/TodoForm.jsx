export const TodoForm = ({onAddTodo,inputValue,setInputValue}) => {
   
     const handleInputChange = (value) => {
        setInputValue({id:value, content:value, checked:false});
    };

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:"",content:"",checked:false});  
    }


  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            value={inputValue.content}
            onChange={(e) => handleInputChange(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit " className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
