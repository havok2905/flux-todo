import React from 'react';
import TodoActions from '../actions/todo_actions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  onClicked() {
    TodoActions.removeTodo(this.props.uid);
  }

  render() {
    return (
      <div className='todo'>
        <p>{this.props.text}</p>
        <button className='-small' onClick={this.onClicked.bind(this)}>Complete</button>
      </div>
    );
  }
}

export default Todo;
