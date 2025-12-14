import { useState } from "react";
import "./App.css";
import { CompleteTodo } from "./components/CompleteTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { InputTodo } from "./components/InputTodo";

type Todo = {
  text: string;
  isComplete: boolean;
};

export const App = () => {

  const [ inputTodo, setInputTodo ] = useState<string>("");
  const [ todos, setTodos ] = useState<Todo[]>([]);

  return(
    <div className="App">
      <InputTodo 
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <InCompleteTodo todos={todos} />
      <CompleteTodo todos={todos} />
    </div>
  );
};