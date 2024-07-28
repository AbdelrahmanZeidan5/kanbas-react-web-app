import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo}: {todo: { id: string; title: string }}) {

    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item">
            <div className="row align-items-center">
                <div className="col">
                    <span>{todo.title}</span>
                </div>
                <div className="col-auto">
                    <button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click" className="btn btn-primary me-2" >Edit</button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </li>
    );
}

