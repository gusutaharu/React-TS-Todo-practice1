

type Props = {
  todos: {
    text: string;
    isComplete: boolean;
  }[];
};

export const CompleteTodo = (props: Props) => {
  const { todos } = props;
  return (
    <div className="completeArea">
      <h4>完了のTODO</h4>
      <ul>
        {todos.filter((todo) => todo.isComplete).map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo.text}</p>
              <button>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};