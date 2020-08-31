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

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.item); //refering to form item state
    this.setState({
      item: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.item}
          onChange={this.handleChanges}
          // name="item"
          placeholder="Add new To-do items here!">
        </input>
        <button
        >
          Add
        </button>
      </form>
    )
  }
}

export default TodoForm;