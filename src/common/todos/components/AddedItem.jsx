import React from 'react'
import {TodoContainer,TodoItem,TodoButtonsContainer,
  DeleteButton,
  EditButton
} from './Elements'
import { useDispatch} from 'react-redux'
import {del} from '../../../features/todos/todoSlice'

const AddedItem = ({content, id}) => {
    const dispatch = useDispatch() 
    // console.log(process.env.REACT_APP_API_URL)
  return (
    <TodoContainer>
      <TodoItem>
        {content}
      </TodoItem>
      <TodoButtonsContainer>
        <DeleteButton onClick = {() => dispatch(del(id))}/>
        <EditButton/>
      </TodoButtonsContainer>


    </TodoContainer>
  )
}

export default AddedItem

