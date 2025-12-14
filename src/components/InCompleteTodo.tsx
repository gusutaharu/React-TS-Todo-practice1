import { Todo } from "../types/todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const InCompleteTodo = (props: Props) => {
  const { todos, setTodos } = props;
  const onClickComplete = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    })
    setTodos(newTodos);
  };
  const onClickDelete = (id: number) => {
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
  return (
    <div className="inCompleteArea">
      <h4>未完了のTODO</h4>
      <ul>
        {todos.filter((todos)=> !todos.isComplete).map((todo)=>(
          <li key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={()=>onClickComplete(todo.id)}>完了</button>
            <button onClick={()=>onClickDelete(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};