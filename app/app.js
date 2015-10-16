import React from 'react';
import ReactDom from 'react-dom';
import Todos from './components/todos';
import TodoForm from './components/todo_form';

ReactDom.render((
  <div>
    <h1>Cloudspace Flux Tutorial</h1>
    <TodoForm/>
    <Todos/>
  </div>
), document.getElementById('app'));
