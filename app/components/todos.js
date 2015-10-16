import React from 'react';
import TodoStore from '../stores/todo_store';
import Todo from '../components/todo';


class Todos extends React.Component {
  constructor() {
    super();
    this.state = this.getStateFromStore();
    TodoStore.addChangeListener(this.onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }

  getStateFromStore() {
    return {todos: TodoStore.todos()};
  }

  onChange() {
    this.setState(this.getStateFromStore());
  }

  todos() {
    return Object.keys(this.state.todos).map((key, index) => {
      let todo = this.state.todos[key];

      return (
        <li key={'todo-' + todo.id}>
          <Todo uid={todo.id} text={todo.text} />
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='todos'>
        { this.todos() }
      </ul>
    );
  }
}

export default Todos;
