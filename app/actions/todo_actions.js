import AppDispatcher from '../dispatcher/app_dispatcher';

let TodoActions = {
  createTodo: (todo) => {
    AppDispatcher.dispatch({ actionType: 'ADD_TODO', todo: todo });
  },
  removeTodo: (uid) => {
    AppDispatcher.dispatch({ actionType: 'REMOVE_TODO', uid: uid });
  },
  clearTodos: () => {
    AppDispatcher.dispatch({ actionType: 'CLEAR_TODOS' });
  }
};

export default TodoActions;
