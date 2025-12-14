type Props = {
  inputTodo: string;
  setInputTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: {
    id: number;
    text: string;
    isComplete: boolean;
  }[];
  setTodos: React.Dispatch<React.SetStateAction<{
    id: number;
    text: string;
    isComplete: boolean;
  }[]>>;
};

export const InputTodo = (props: Props) => {
  const { inputTodo, setInputTodo, todos, setTodos } = props;
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