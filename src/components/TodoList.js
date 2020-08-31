import React from 'react';

import Todo from './Todo';

const TodoList = props => {

  return (
    <div className="chores-list">
      {props.chores.map(item => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Clear Purchased
      </button>
    </div>
  );
};

export default TodoList;