import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useTodoAction } from "./UseToDoAction";
import { useTodoApi } from "./useTodoApi";
import { useTodoHelpers } from "./todoHelpers";


export const useToDoManangment = () => {
  const [todos, setTodos] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [isDeletingCompleted, setIsDeletingCompleted] = useState(false);
  const { loadFromLocalStorage, saveToLocalStorage } = useLocalStorage();
  const { fetchTodos, createTodo, updateTodo, deleteTodo } = useTodoApi();
  const {
    sortedSaveTodos,
    updateTodoData,
    createNewTodo,
    toggleTodoCompletion,
  } = useTodoHelpers();

  useEffect(() => {
    const loadinngInitialDate = async () => {
      const savedTodos = sortedSaveTodos(loadFromLocalStorage());
      setTodos(savedTodos);
      try {
        const serverTodos = await fetchTodos();
        const sortedServerTodos = sortedSaveTodos(serverTodos);
        setTodos(sortedServerTodos);
        saveToLocalStorage(sortedServerTodos);
      } catch (error) {
        console.error(`Ошибка загрузки данных ${error.message}`);
      }
    };
    loadinngInitialDate();
  }, []);

  const actions = useTodoAction({
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
  });

  return {
    todos,
    setTodos,
    deletingId,
    setDeletingId,
    isDeletingCompleted,
    setIsDeletingCompleted,
    ...actions,
  };
};
