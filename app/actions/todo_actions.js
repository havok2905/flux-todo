import AppDispatcher from '../dispatcher/app_dispatcher';
import TodoConstants from '../constants/todo_constants';

let TodoActions = {
  createTodo: (todo) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants['ADD_TODO'],
      todo: todo
    });
  },
  removeTodo: (uid) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants['REMOVE_TODO'],
      uid: uid
    });
  },
  clearTodos: () => {
    AppDispatcher.dispatch({
      actionType: TodoConstants['CLEAR_TODOS']
    });
  }
};

export default TodoActions;
