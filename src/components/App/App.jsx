import { lazy, Suspense, useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ToogleTheme from "./ToggleTheme";
import DeleteCompletedButton from "./DeleteCompletedButton";
import { getInishialTheme } from "../../helpers/getInishialTheme";
import { toggleTheme } from "../../helpers/toggleTheme";
import { useToDoManangment } from "../../hooks/useToDoManangment";
import Loader from "./Loader";

const MainContent = lazy(() => import("./MainContent"));

function App() {
  const [theme, setTheme] = useState(getInishialTheme());

  const {
    todos,
    deletingId,
    setDeletingId,
    isDeletingCompleted,
    setIsDeletingCompleted,
    onAdd,
    handleUpdate,
    toggleComplete,
    handleDelete,
    hasCompletedTodos,
    handleDeleteCompleted,
    confirmDeleteCompletet,
    onReorder,
  } = useToDoManangment();

  return (
    <div
      data-theme={theme}
      className="flex flex-col justify-center items-center  bg-page-light dark:bg-page-dark p-6 min-h-screen"
    >
      <ToogleTheme toggleTheme={() => toggleTheme(setTheme)} theme={theme} />
      <Suspense fallback={<Loader />}>
        <MainContent
          onAdd={onAdd}
          todos={todos}
          handleUpdate={handleUpdate}
          setDeletingId={setDeletingId}
          toggleComplete={toggleComplete}
          onReorder={onReorder}
        />
      </Suspense>

      <DeleteConfirmModal
        onCancel={() => setDeletingId(null)}
        onConfirm={() => {
          handleDelete(deletingId);
          setDeletingId(null);
        }}
        message={"Вы увены, что хотите удалить эту задачу?"}
        deletingId={deletingId}
      />

      <DeleteConfirmModal
        onCancel={() => setIsDeletingCompleted(false)}
        onConfirm={confirmDeleteCompletet}
        message={`Вы уверены, что хотите удалить все выполненные задачи (${todos.filter((todo) => todo.completed).length}) ?`}
        isDeletingCompleted={isDeletingCompleted}
      />

      <DeleteCompletedButton
        onClick={handleDeleteCompleted}
        hasCompletedTodos={hasCompletedTodos}
      />
    </div>
  );
}

export default App;
