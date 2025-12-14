import { useState } from "react";
import "./App.css";
import { CompleteTodo } from "./components/CompleteTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { InputTodo } from "./components/InputTodo";
import { Todo } from "./types/todo";

export const App = () => {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  return(
    <div className="App">
      <InputTodo
        todos={todos}
        setTodos={setTodos}
      />
      <InCompleteTodo todos={todos} setTodos={setTodos} />
      <CompleteTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};