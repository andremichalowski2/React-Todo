import React from 'react';
import ReactDOM from 'react-router-dom';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({item: e.target.value})
  };

  render() {
    return (
      <form>
        <input 
          type="text"
          value={this.state.item}
          onChange={this.handleChanges}
          // name="item"
          placeholder="Add new To-do items here!">
        </input>
        <button>

        </button>
      </form>
    )
  }
}

export default TodoForm;