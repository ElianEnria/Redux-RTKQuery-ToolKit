import { useState } from "react";
import {
  useGetTodosByUserIdQuery,
  useGetTodosQuery,
} from "./store/apis/todosApi";

export const TodoRTKApp = () => {

  const [userId, setUserId] = useState(1);
  // const {data: todos=[], isLoading} = useGetTodosQuery();
  const { data: todos, isLoading } = useGetTodosByUserIdQuery(userId);

  const nextTodo = () => {
    setUserId(userId + 1);
  };
  const prevTodo = () => {
    if (userId === 1) return;
    setUserId(userId - 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "true" : "false"}</h4>
      <pre>{JSON.stringify(todos, null, 2)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>

      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {
        todos?.map((todo) => (
          <li key={todo.id}><strong>{todo.completed ? '✅' : '❌'}</strong>{todo.title}</li>
        ))}
      </ul> */}
    </>
  );
};
