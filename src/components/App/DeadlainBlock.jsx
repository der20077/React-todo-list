const DeadlainBlock = ({
  showSetDeadlineInput,
  setShowDeadlineInput,
  setDeadline,
  deadline
}) => {
  return (
    <>
      {showSetDeadlineInput && (
        <div className="flex items-center gap-2  text-gray-500 mt-2">
          <input
            className="p-2 border rounded flex-1 border-blue-700"
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button
            className="p-2 hover:text-gray-700 cursor-pointer"
            onClick={() => {
              setDeadline("");
              setShowDeadlineInput(false);
            }}
            type="button"
          >
            Отмена
          </button>
        </div>
      )}
      {!showSetDeadlineInput && (
        <button
          className="self-start text-sm text-blue-500 hover:text-blue-700"
          onClick={() => {
            setShowDeadlineInput(true);
          }}
          type="button"
        >
          + Добавить дедлайн
        </button>
      )}
    </>
  );
};

export default DeadlainBlock;