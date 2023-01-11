import React from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить свеклу" },
    { id: 2, completed: false, title: "Купить картошку" },
    { id: 3, completed: false, title: "Сделать зарядку" },
  ]);

  function ToggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function CreateTodo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>List zadach</h1>
        <AddTodo onCreate={CreateTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={ToggleTodo} />
        ) : (
          <p>Ничего не покупай</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
