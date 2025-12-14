type Props = {
  inputTodo: string;
  setInputTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: {
    text: string;
    isComplete: boolean;
  }[];
  setTodos: React.Dispatch<React.SetStateAction<{
    text: string;
    isComplete: boolean;
  }[]>>;
};

export const InputTodo = (props: Props) => {
  const { inputTodo, setInputTodo, todos, setTodos } = props;
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
    console.log(inputTodo);
  };
  const onClickAdd = () => {
    if (inputTodo === "") return;
    const newTodo = { text: inputTodo, isComplete: false};
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