export const useTodoHelpers = () => {
  const sortedSaveTodos = (todos) => {
    if (!todos || !Array.isArray(todos)) {
      return [];
    }
    return [...todos].sort((a, b) => a.order - b.order);
  };

  const createNewTodo = (text, deadline, order) => ({
    id: `temp_${Date.now()}`,
    text,
    completed: false,
    createtAt: new Date().toISOString(),
    deadLine: deadline || null,
    order,
  });

  const updateTodoData = (todo, newText, newDeadlain) => ({
    ...todo,
    text: newText,
    deadLine: newDeadlain,
  });

  const toggleTodoCompletion = (todo) => ({
    ...todo,
    completed: !todo.completed,
  });

  return {
    sortedSaveTodos,
    createNewTodo,
    updateTodoData,
    toggleTodoCompletion,
  };
};
