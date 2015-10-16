jest.dontMock('../../app/stores/todo_store.js');

var TodoStore;

describe('TodoStore', ()=> {
  beforeEach(()=> {
    TodoStore = require('../../app/stores/todo_store.js');
  });

  describe('todos', ()=> {
    it('should return the todos hash', ()=> {
      expect(TodoStore.todos()).toEqual({});
    });
  });

  describe('addTodo', ()=> {
    it('should add a todo', ()=> {
      TodoStore.addTodo({uid: 1, text: 'foo'});
      let todo = TodoStore.todos()['1'];
      expect(todo.text).toEqual('foo');
      expect(todo.uid).toEqual(1);
    });
  });

  describe('clearTodos', ()=> {
    it('should clear all todos', ()=> {
      TodoStore.addTodo({uid: 1, text: 'foo'});
      TodoStore.addTodo({uid: 2, text: 'bar'});
      TodoStore.clearTodos();
      let todos = TodoStore.todos();
      expect(todos).toEqual({});
    });
  });

  describe('removeTodo', ()=> {
    it('should remove a todo', ()=> {
      TodoStore.addTodo({uid: 1, text: 'foo'});
      TodoStore.addTodo({uid: 2, text: 'bar'});
      TodoStore.removeTodo('2');
      let todos = TodoStore.todos();
      expect(todos['1']).toBeDefined();
      expect(todos['2']).toBeUndefined();
    });
  });

  describe('emitChange', ()=> {
    it('should emit change', ()=> {
      spyOn(TodoStore, 'emit');
      TodoStore.emitChange();
      expect(TodoStore.emit).toHaveBeenCalledWith('todo-change');
    });
  });

  describe('addChangeListener', ()=> {
    it('should add change listeners', ()=> {
      spyOn(TodoStore, 'on');
      let func = ()=>{};
      TodoStore.addChangeListener(func);
      expect(TodoStore.on).toHaveBeenCalledWith('todo-change', func);
    });
  });

  describe('removeChangeListener', ()=> {
    it('should remove change listeners', ()=> {
      spyOn(TodoStore, 'removeListener');
      let func = ()=>{};
      TodoStore.removeChangeListener(func);
      expect(TodoStore.removeListener).toHaveBeenCalledWith('todo-change', func);
    });
  });
});
