import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {

    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col">
                    <input 
                        className="form-control form-control-sm" 
                        value={todo.title}
                        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
                    />
                </div>
                <div className="col-auto">
                    <button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click" className="btn btn-warning me-2">Update</button>
                    <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click" className="btn btn-success">Add</button>
                </div>
            </div>
        </li>

    );
}



 