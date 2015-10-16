import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/app_dispatcher';
import TodoConstants from '../constants/todo_constants';

class TodoStoreEmmitter extends EventEmitter {
  constructor() {
    super();
    this._todos = {};
  }

  removeTodo(uid) {
    delete this._todos[uid];
  }

  addTodo(todo) {
    this._todos[todo.id] = todo;
  }

  clearTodos() {
    this._todos = {};
  }

  todos() {
    return this._todos;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

let TodoStore = new TodoStoreEmmitter();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case TodoConstants['ADD_TODO']:
      TodoStore.addTodo(action.todo);
      TodoStore.emitChange();
      break;
    case TodoConstants['REMOVE_TODO']:
      TodoStore.removeTodo(action.uid);
      TodoStore.emitChange();
      break;
    case TodoConstants['CLEAR_TODOS']:
      TodoStore.clearTodos();
      TodoStore.emitChange();
      break;
    default:
  }
});

export default TodoStore;
