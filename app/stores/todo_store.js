import EventEmitter from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this._todos = {};
  }

  removeTodo(uid) {
    delete this._todos[uid];
    this.emitChange();
  }

  addTodo(todo) {
    this._todos[todo.uid] = todo;
    this.emitChange();
  }

  clearTodos() {
    this._todos = {};
    this.emitChange();
  }

  todos() {
    return this._todos;
  }

  emitChange() {
    this.emit('todo-change');
  }

  addChangeListener(callback) {
    this.on('todo-change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('todo-change', callback);
  }
}

export default new TodoStore();
