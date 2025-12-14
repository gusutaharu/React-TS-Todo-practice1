import "./App.css";
import { CompleteTodo } from "./components/CompleteTodo";
import { InCompleteTodo } from "./components/InCompleteTodo";
import { InputTodo } from "./components/InputTodo";

type Todo = {
  text: string;
  isComplete: boolean;
};

export const App = () => {

  const sampleTodos: Todo[] = [
    { text: "タスク1", isComplete: true },
    { text: "タスク2", isComplete: true },
    { text: "タスク3", isComplete: false },
    { text: "タスク4", isComplete: false },
  ];

  return(
    <div className="App">
      <InputTodo />
      <InCompleteTodo todos={sampleTodos} />
      <CompleteTodo todos={sampleTodos} />
    </div>
  );
};