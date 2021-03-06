import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleOnInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: true,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);

    reset();
  };

  return (
    <div>
      <h1>ToDo App ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item">
                <span role="img" aria-label="sheep">🐑</span>
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1} {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>New Task</h4>
          <hr />
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="e.g. Learn..."
              autoComplete="off"
              onChange={handleOnInputChange}
              value={description}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 w-100"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
