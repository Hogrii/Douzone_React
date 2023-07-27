import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';
import TodoContext from './TodoContext';

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const rowRenderer = ({ index, key, style }) => {
    const todo = state.todos[index];
    return <TodoListItem todo={todo} key={key} style={style} />;
    /*
    return (
      <TodoListItem
        todo={todo}
        key={key}
        removeTodo={actions.removeTodo}
        onToggle={actions.onToggle}
        changeChecked={actions.changeChecked}
        style={style}
      />
    );
     */
  };

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={state.todos.length} // rowCount * rowHeight = 스크롤양(사이즈)
      rowHeight={57}
      rowRenderer={rowRenderer} // callBack
      // list={state.todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
