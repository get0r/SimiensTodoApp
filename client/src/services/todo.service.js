import { apiCreator } from './axios';
import { TODOS } from './routeConstants';

const api = apiCreator();

export const TodoService = {
    createTodo: (todoInfo) => api.post(TODOS, todoInfo),
    getTodoById: (todoId) => api.get(withId(TODOS, todoId)),
    getCategories: () => api.get(TODOS),
    updateTodoById: (todoId, updatedTodo) => api.put(withId(TODOS, todoId), updatedTodo),
    removeTodoById: (todoId) => api.delete(withId(TODOS, todoId)),
};
