import { create } from 'zustand';

interface TodoListStateType {
  todoList: string[];
  addTodoListItem: (item: string) => void;
  deleteTodoListItem: (id: number) => void;
}

const useTodoListStore = create<TodoListStateType>((set) => ({
  todoList: [],
  addTodoListItem: (item) =>
    set(({ todoList }) => ({ todoList: [...todoList, item] })),
  deleteTodoListItem: (id) =>
    set(({ todoList }) => ({
      todoList: todoList.filter((_, idx) => idx !== id),
    })),
}));

export default useTodoListStore;
