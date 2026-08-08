import CheckIcon from "./CheckIcon";

const TodoEditForm = ({
  editText,
  setEditText,
  editDeadlain,
  setEditDeadlain,
  innerRef,
  onSave,
}) => {
  return (
    <div className="flex flex-col w-full gap-2 items-stretch" ref={innerRef}>
      <input
        className="w-full px-2 py-1 border-2 border-blue-500 rounded text-sm text-gray-700 dark:text-gray-300"
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
      />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <input
          className=" w-full sm:flex-1 px-2 py-1 border-2 border-blue-500 rounded text-sm text-gray-700 dark:text-gray-300"
          onChange={(e) => setEditDeadlain(e.target.value)}
          value={editDeadlain}
          type="datetime-local"
        />
        <button
          className="flex items-center justify-center gap-1 px-2 py-1 sm:px-3 sm:py-1
                 text-green-600 hover:text-green-800 cursor-pointer bg-white border-2 border-green-500 rounded
                 hover:bg-green-50 transition-colors text-sm sm:text-base"
          onClick={onSave}
        >
          <CheckIcon />
          <span className="sm:hidden">ОК</span>
          <span className="hidden sm:inline">Готово</span>
        </button>
      </div>
    </div>
  );
};

export default TodoEditForm;
