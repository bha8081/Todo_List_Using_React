import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function TodoList({ editTodo, deleteTodo, todoFinished }) {

    //const dispatch = useDispatch();
    const list = useSelector((state) => state.todo.todoList)
    console.log(list);

    // Finished Function.
    function onFinished(todo, isFinished) {
        todoFinished({todo, isFinished});
        //dispatch({type: 'finish_todo', payload: {todo, isFinished: isFinished}})
    }
    
    // Delete Function.
    function onDelete(todo) {
        deleteTodo({todo});
        //dispatch({type: 'delete_todo', payload: {todo}})
    }

    // Edit Function.
    function onEdit(todo, todoText) {
        editTodo({todo, todoText})
        //dispatch({type: 'edit_todo', payload: {todo, todoText}})
    }

    return (
        <div>
            {list.length > 0 &&
            list.map(todo => <Todo
                    key={todo.id}
                    id={todo.id}
                    isFinished={todo.finished}
                    todoData={todo.todoData}
                    changeFinished={(isFinished) => onFinished(todo, isFinished)}
                    onDelete={() => onDelete(todo)}
                    onEdit={(todotext) => onEdit(todo, todotext)}
                />)}
        </div>
    );
}

export default TodoList