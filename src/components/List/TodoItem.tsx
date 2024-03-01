import styled from '@emotion/styled';

import Button from '@/components/Common/Button';

import useTodoListStore from '@store/useTodoListStore';

interface TodoItemProps {
  idx: number;
  item: string;
}

const TodoItem = ({ idx, item }: TodoItemProps) => {
  const { deleteTodoListItem } = useTodoListStore();

  const handleDeleteButtonClick = (idx: number) => deleteTodoListItem(idx);

  return (
    <StyledTodoItem key={idx}>
      <p>{item}</p>
      <Button btnType={'delete'} onClick={() => handleDeleteButtonClick(idx)} />
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  border: 1px solid black;
  padding: 10px;
`;

export default TodoItem;
