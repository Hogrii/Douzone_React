import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ model }) => {
  const rowRenderer = ({ index, key, style }) => {
    const todo = model.todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        removeTodo={model.removeTodo}
        onToggle={model.onToggle}
        changeChecked={model.changeChecked}
        style={style}
      />
    );
  };

  return (
    // <div className="TodoList">
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       removeTodo={removeTodo}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div>

    // virtualized component를 따로 사용해야 한다
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={model.todos.length} // rowCount * rowHeight = 스크롤양(사이즈)
      rowHeight={57}
      rowRenderer={rowRenderer} // callBack
      list={model.list}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
