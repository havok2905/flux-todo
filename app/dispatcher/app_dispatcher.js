import Flux from 'flux';
import TodoStore from '../stores/todo_store';
import AlertStore from '../stores/alert_store';

let AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case 'ADD_TODO':
      TodoStore.addTodo(action.todo);
      break;
    case 'REMOVE_TODO':
      TodoStore.removeTodo(action.uid);
      break;
    case 'CLEAR_TODOS':
      TodoStore.clearTodos();
      break;
    case 'INCREMENT_ALERTS':
      AlertStore.increment();
      break;
    case 'DECREMENT_ALERTS':
      AlertStore.decrement();
      break;
    default:
  }
});

export default AppDispatcher;
