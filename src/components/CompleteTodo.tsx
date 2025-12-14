
type Props = {
  todos: {
    id: number;
    text: string;
    isComplete: boolean;
  }[];
  setTodos: React.Dispatch<React.SetStateAction<{
    id: number;
    text: string;
    isComplete: boolean;
  }[]>>
};

export const CompleteTodo = (props: Props) => {
  const { todos, setTodos } = props;
  const onClickBack = (id: number) => {
    const newTodos = todos.map((todo)=>{
      if(todo.id === id){
        todo.isComplete = false;
      }
      return todo;
    })
    setTodos(newTodos);
  };

  return (
    <div className="completeArea">
      <h4>完了のTODO</h4>
      <ul>
        {todos.filter((todo) => todo.isComplete).map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.text}</p>
              <button onClick={()=>onClickBack(todo.id)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};