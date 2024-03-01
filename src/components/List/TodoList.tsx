import { useState } from 'react';
import styled from '@emotion/styled';

import Input from '@components/Common/Input';
import Button from '@components/Common/Button';
import TodoItem from '@components/List/TodoItem';

import useTodoListStore from '@store/useTodoListStore';

const TodoList = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { todoList, addTodoListItem } = useTodoListStore();

  const handleAddButtonClick = () => {
    setInputValue('');
    addTodoListItem(inputValue);
  };

  return (
    <TodoListContainer>
      <div>TodoList</div>
      <InputWrapper>
        <Input value={inputValue} setInputValue={setInputValue} />
        <Button btnType={'add'} onClick={handleAddButtonClick} />
      </InputWrapper>
      {todoList.map((item: string, idx: number) => (
        <TodoItem key={idx} idx={idx} item={item} />
      ))}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  border: 1px solid black;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  border: 1px solid black;
  padding: 10px;
`;

export default TodoList;
