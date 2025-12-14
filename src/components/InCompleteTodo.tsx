
type Props = {
  todos: {
    text: string;
    isComplete: boolean;
  }[];
};

export const InCompleteTodo = (props: Props) => {
  const { todos } = props;
  return (
    <div className="inCompleteArea">
      <h4>未完了のTODO</h4>
      <ul>
        {todos.filter((todos)=> !todos.isComplete).map((todo,index)=>(
          <li key={index}>
            <p>{todo.text}</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        ))}

      </ul>
    </div>
  );
};