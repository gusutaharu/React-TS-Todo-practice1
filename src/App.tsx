import "./App.css";

import { CompleteTodo } from "./components/CompleteTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  return(
    <div className="App">
      <InputTodo />
      <InCompleteTodo />
      <CompleteTodo />
    </div>
  );
};