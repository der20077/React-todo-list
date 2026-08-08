import formatDateTime from "../../helpers/dateUtils";

const TodoTextDisplay = ({ todo, setIsEditing }) => {
  return (
    <div
      onDoubleClick={() => setIsEditing(true)}
      className=" flex flex-col cursor-pointer"
    >
      <span
        className={`tex-1 ${
          todo.completed
            ? "line-through  text-gray-400"
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {todo.text}
      </span>

      <span className=" text-xs text-gray-500">
        Создано: {formatDateTime(todo.createtAt)}
      </span>
      {todo.deadLine && (
        <span
          className={`text-xs
            ${
              todo.completed
                ? "text-gray-400"
                : new Date(todo.deadLine) < new Date()
                  ? "text-red-500"
                  : "text-gray-500"
            }`}
        >
          Сделать до: {formatDateTime(todo.deadLine)}
        </span>
      )}
    </div>
  );
};

export default TodoTextDisplay;
