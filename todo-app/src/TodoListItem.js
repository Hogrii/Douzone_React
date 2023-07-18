import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, removeTodo, onToggle }) => {
  const { title, checked } = todo;
  const onClickRemove = useCallback(
    (e) => {
      removeTodo(todo.id);
    },
    [todo]
  );

  /*
  // 필요하면 주석 풀고 사용
  const onChangeChecked = useCallBack((e) => {
    changeChecked(todo.id);
  });
   */

  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => onToggle(todo.id)}
        /* onChangeChecked={onChangeChecked} */
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{title}</div>
      </div>
      <div className="remove" onClick={onClickRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
// React.memo() 로 감싸주면 캐싱이 된다
