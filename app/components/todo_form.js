import React from 'react';
import ReactDom from 'react-dom';

import TodoActions from '../actions/todo_actions';
import AlertActions from '../actions/alert_actions';

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

  render() {
    return (
      <div>
        <fieldset>
          <input type='text' ref='text'/>
        </fieldset>
        <fieldset>
          <button onClick={this.add.bind(this)}>Add</button>
          <button className='-destructive' onClick={TodoActions.clearTodos}>Clear</button>
          <button onClick={AlertActions.incrementAlerts}>Increment Alert</button>
          <button className='-destructive' onClick={AlertActions.decrementAlerts}>Decrement Alert</button>
        </fieldset>
      </div>
    );
  }
}

export default TodoForm;
