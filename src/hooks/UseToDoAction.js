export const useTodoAction = ({
  todos,
  setTodos,
  createNewTodo,
  createTodo,
  saveToLocalStorage,
  updateTodoData,
  updateTodo,
  toggleTodoCompletion,
  deleteTodo,
  setIsDeletingCompleted,
}) => {
  const onAdd = async (text, deadLine) => {
    const newTodo = createNewTodo(text, deadLine, todos.length + 1);

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    try {
      const createdTodo = await createTodo(newTodo);

      const syncedTodos = updatedTodos.map((todo) =>
        todo.id === newTodo.id ? createdTodo : todo,
      );

      setTodos(syncedTodos);
      saveToLocalStorage(syncedTodos);
    } catch (error) {
      console.error(`Ошибка добавления ${error.message}`);
      setTodos(todos);
    }
  };
  const handleUpdate = async (id, newText, newDeadlain) => {
    const todoToUpdate = todos.find((todo) => id === todo.id);
    if (!todoToUpdate) return;
    const updatedTodo = updateTodoData(todoToUpdate, newText, newDeadlain);

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo,
    );

    setTodos(updatedTodos);

    try {
      await updateTodo(id, updatedTodo);
      saveToLocalStorage(updatedTodo);
    } catch (error) {
      console.error(`Ошибка обновления вот тут ${error.message}`);
      setTodos(todos);
    }
  };

  const toggleComplete = async (id) => {
    const toDoToUpdate = todos.find((todo) => todo.id === id);
    if (!toDoToUpdate) return;

    const updatedTodo = toggleTodoCompletion(toDoToUpdate);

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo,
    );
    setTodos(updatedTodos);

    try {
      await updateTodo(id, updatedTodo);
      saveToLocalStorage(updatedTodos);
    } catch (error) {
      console.error(`Ошибка обновления чекбокса ${error.message}`);
      setTodos(todos);
    }
  };

  const handleDelete = async (id) => {
    const previosTodos = todos;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    try {
      await deleteTodo(id);
      saveToLocalStorage(updatedTodos);
    } catch (error) {
      console.error(`Ошибка удаления ${error.message}`);
      setTodos(previosTodos);
    }
  };

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  const handleDeleteCompleted = () => {
    if (!hasCompletedTodos) return;
    setIsDeletingCompleted(true);
  };

  const confirmDeleteCompletet = async () => {
    const originalTodos = [...todos];

    const comletedIds = originalTodos
      .filter((t) => t.completed)
      .map((t) => t.id);

    setTodos(originalTodos.filter((todo) => !todo.completed));

    const failedId = [];

    for (const id of comletedIds) {
      try {
        await deleteTodo(id);
      } catch (error) {
        console.error(`Ошибка удаления задачи ${id} ${error.message}`);
        failedId.push(id);
      }
    }

    if (failedId.length > 0) {
      setTodos(
        originalTodos.filter(
          (todo) => !todo.completed || failedId.includes(todo.id),
        ),
      );
    }
    saveToLocalStorage(todos);
    setIsDeletingCompleted(false);
  };

  const onReorder = async (activeId, overId) => {
    if (!overId) {
      return;
    }

    try {
      const activeInndex = todos.findIndex((todo) => todo.id === activeId);
      const overInndex = todos.findIndex((todo) => todo.id === overId);

      if (
        activeInndex === -1 ||
        overInndex === -1 ||
        activeInndex === overInndex
      )
        return;

      const newTodos = [...todos];
      const [movedTodo] = newTodos.splice(activeInndex, 1);
      newTodos.splice(overInndex, 0, movedTodo);

      const updatedTodos = newTodos.map((todo, index) => ({
        ...todo,
        order: index + 1,
      }));
      setTodos(updatedTodos);

      await Promise.all(
        updatedTodos.map((todo) => updateTodo(todo.id, { order: todo.order })),
      );
      saveToLocalStorage(updatedTodos);
    } catch (error) {
      console.error(`Ошибка изменения порядка`, error);
      setTodos(todos);
    }
  };

  return {
    onAdd,
    handleUpdate,
    toggleComplete,
    handleDelete,
    handleDeleteCompleted,
    confirmDeleteCompletet,
    onReorder,
    hasCompletedTodos
  };
};
