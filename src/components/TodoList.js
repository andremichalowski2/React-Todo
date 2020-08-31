import React from 'react';

import Todo from './Todo';

const TodoList = props => {

  return (
    <div className="chores-list">
      {props.chores.map(item => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={props.clearItem}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;