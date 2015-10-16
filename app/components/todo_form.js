import React from 'react';
import ReactDom from 'react-dom';

import TodoActions from '../actions/todo_actions';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.count = 0;
  }

  add() {
    let node = ReactDom.findDOMNode(this.refs.text),
        text = node.value;

    node.value = '';
    TodoActions.createTodo({ text: text, id: this.count });

    this.count++;
  }

  clear() {
    TodoActions.clearTodos();
  }

  sort() {
    TodoActions.sortTodos();
  }

  render() {
    return (
      <div>
        <fieldset>
          <input type='text' ref='text'/>
        </fieldset>
        <fieldset>
          <button onClick={this.add.bind(this)}>Add</button>
          <button className='-destructive' onClick={this.clear.bind(this)}>Clear</button>
        </fieldset>
      </div>
    );
  }
}

export default TodoForm;
