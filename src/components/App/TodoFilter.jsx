import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { MdOutlineFilterList } from "react-icons/md";

const TodoFilter = ({ filter, setFilter }) => {
  const buttonClasses = (currentFilter) =>
    `flex items-center gap-2 px-4 py-2 rounded transition-colors
  ${
    filter === currentFilter
      ? `bg-blue-500  text-white`
      : "bg-blue-200  dark:bg-gray-700 text-gray-800 cursor-pointer dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
  } duration-150 `;

  return (
    <div className="flex flex-row gap-2 mb-4 justify-center">
      <button
        aria-label="Все задачи"
        className={buttonClasses("all")}
        onClick={() => setFilter("all")}
      >
        <MdOutlineFilterList size={18} />
      </button>
      <button
        aria-label="Не выполненные"
        className={buttonClasses("active")}
        onClick={() => setFilter("active")}
      >
        <FaRegCircle size={16} />
      </button>
      <button
        className={buttonClasses("completed")}
        aria-label="Выполненные"
        onClick={() => setFilter("completed")}
      >
        <FaCheckCircle size={16} />
      </button>
    </div>
  );
};

export default TodoFilter;
