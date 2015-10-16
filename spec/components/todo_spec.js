jest.dontMock('../../app/components/todo.js');

var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    Todo = require('../../app/components/todo'),
    ft;

function foundTodo(uid, text) {
  let todo = TestUtils.renderIntoDocument(<Todo uid={uid} text={text}/>),
      compiledTodo = TestUtils.findRenderedDOMComponentWithTag(todo, 'p');

  return ReactDOM.findDOMNode(compiledTodo);
}

describe('TodoComponent', ()=> {
  describe('render', ()=> {
    it('renders from props', ()=> {
      ft = foundTodo(1, 'foo');
      expect(ft.textContent).toEqual('foo');
    });
  });
});
