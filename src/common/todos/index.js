import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {selectTodos} from '../../features/todos/todoSlice'
import {getPosts} from '../../features/posts/postSlice'
import {TodoContainer,
  TodoHeader,
  CounterBar,
  ClearButton,
  DeletedItemHeader,
} from './Elements'
import DeletedItem from './components/DeletedItem'
import AddedItem from './components/AddedItem'


const TodoList = () => {
  const todoItems  = useSelector(selectTodos)
  const dispatch = useDispatch()
  console.log(todoItems)
  useEffect(()=> {
    dispatch(getPosts({limit: 5}))
  },[dispatch])
  return (
    <TodoContainer>
        <TodoHeader>
           Your Agenda:
        </TodoHeader>

       {todoItems.map(({txt, id} ) =><AddedItem key ={id} content={txt} id = {id} ></AddedItem> )}
        <CounterBar>
           Numbers: 0
        </CounterBar>
        <ClearButton>
          Clear all Items
        </ClearButton>
        <DeletedItemHeader>
          Deleted Items:   
        </DeletedItemHeader>
        <DeletedItem/>
    </TodoContainer>
  )
}

export default TodoList
