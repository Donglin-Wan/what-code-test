import React from 'react';
import { TodoContainer, TodoHeader } from './Elements';
import AddedItem from './components/AddedItem';
import { useGetPostsQuery } from '../../service/postsApi';

const TodoList = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useGetPostsQuery();
  return (
    <TodoContainer>
      <TodoHeader>Your Agenda:</TodoHeader>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data.message ? (
            <div>{data.message}</div>
          ) : (
            data.map(({ title, id }) => (
              <AddedItem key={id} content={title} id={id}></AddedItem>
            ))
          )}
        </div>
      )}
    </TodoContainer>
  );
};

export default TodoList;
