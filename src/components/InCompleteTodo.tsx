export const InCompleteTodo = () => {
  return (
    <div className="inCompleteArea">
      <h4>未完了のTODO</h4>
      <ul>
        <li>
          <p>タスク2</p>
          <button>完了</button>
          <button>削除</button>
        </li>
      </ul>
    </div>
  );
};