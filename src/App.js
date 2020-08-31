import React from 'react';

import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';


const chores = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

const groceries = [
  {
    task: 'Carrots',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Brocoli',
    id: 1528817077286,
    completed: false
  }
]


class App extends React.Component {
  constructor() {
    super();
    this.state = 
    [
      {
        chores: chores
      },
      {
        groceries: groceries
      }
    ];
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    // const { chores, groceries } = this.state;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        {/* <TodoList chores={this.state.chores} /> */}
      </div>
    );
  }
}

export default App;
