import React, { useState, useEffect } from 'react';
import {
  TodoContainer,
  TodoItem,
  TodoButtonsContainer,
  DeleteButton,
  EditButton,
  TodoForm,
  EditWrapper,
  TitleHeader,
  ContentHeader,
  Title,
  Content,
  SubmitButton,
  DetailWrapper,
  DetailContent,
} from './Elements';
import {
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} from '../../../service/postsApi';

const AddedItem = ({ content, id }) => {
  const [deletePost] = useDeletePostMutation();
  const [EditOpened, setEditOpened] = useState(false);
  const [DetailOxpened, setDetailOpened] = useState(false);
  const initialState = {
    id: id,
    title: '',
    content: '',
  };
  const [EditFormValue, setEditFormValue] = useState(initialState);
  const [updataPost] = useUpdatePostMutation();
  const { data, error, isLoading, isFetching, isSuccess } = useGetPostQuery(id);
  useEffect(() => {
    if (data) {
      setEditFormValue((preValue) => ({
        ...preValue,
        title: data.title,
        content: data.content,
      }));
    }
  }, [id, data]);
  const deleteHandler = async () => {
    await deletePost(id);
  };
  const editHandler = async () => {
    await setEditOpened((preValue) => !preValue);
  };
  const updateHandler = async () => {
    await updataPost(EditFormValue);
  };
  const openDetailHandler = () => {
    setDetailOpened((preState) => !preState);
    setEditOpened(false);
  };
  return (
    <TodoContainer>
      <TodoItem onClick={openDetailHandler}>{content}</TodoItem>
      <TodoButtonsContainer>
        <DeleteButton onClick={deleteHandler} />
        <EditButton onClick={editHandler} />
      </TodoButtonsContainer>
      {DetailOxpened && (
        <DetailWrapper>
          <DetailContent>
            {isLoading && 'is Loading'}
            {isFetching && 'is Fetching'}
            {error && 'Error'}
            {isSuccess && data.content}
          </DetailContent>
        </DetailWrapper>
      )}
      {EditOpened && (
        <TodoForm>
          <EditWrapper>
            <TitleHeader>Title</TitleHeader>
            {isLoading && <Title value="is Loading" />}
            {isFetching && <Title value="is Fetching" />}
            {error && <TitleHeader value="Error" />}
            {isSuccess && (
              <Title
                value={EditFormValue.title}
                onChange={({ target: { value } }) => {
                  setEditFormValue((preValue) => ({
                    ...preValue,
                    title: value,
                  }));
                }}
              />
            )}
          </EditWrapper>
          <EditWrapper>
            <ContentHeader>Cotent:</ContentHeader>
            {isLoading && <Content value="is Loading" />}
            {isFetching && <Content value="is Fetching" />}
            {error && <Content value="Error" />}
            {isSuccess && (
              <Content
                value={EditFormValue.content}
                onChange={({ target: { value } }) => {
                  setEditFormValue((preValue) => ({
                    ...preValue,
                    content: value,
                  }));
                  console.log(EditFormValue);
                }}
              />
            )}
          </EditWrapper>
          <SubmitButton onClick={updateHandler} />
        </TodoForm>
      )}
    </TodoContainer>
  );
};
export default AddedItem;
