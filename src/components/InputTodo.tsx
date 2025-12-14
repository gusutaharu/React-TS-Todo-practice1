import { useState } from "react";
import { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const InputTodo = (props: Props) => {
  const { todos, setTodos } = props;
  const [ inputTodo, setInputTodo ] = useState<string>("");
  
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };
  const onClickAdd = () => {
    if (inputTodo === "") return;
    const newTodo = { id:todos.length+1 , text: inputTodo, isComplete: false};
    setTodos([...todos, newTodo]);
    setInputTodo("");
  };
  return (
    <div className="inputArea">
      <input 
        type="text" 
        placeholder="TODOを入力"
        value={inputTodo}
        onChange={onChangeInput}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};