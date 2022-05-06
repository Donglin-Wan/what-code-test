import styled from 'styled-components';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';



export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  width: 400px;
  margin: 2px;
`;

export const RemoveButton = styled.button`
  padding: 4px 8px;
  background-color: #eb5353;
  color: white;
  border: none;
`;

export const TodoContainer = styled.div`
background-color: #0f131a;
box-shadow: 0 -1px 0 #292d33, 0 1px 0 #292d33;
padding-top: 13px;
padding-bottom: 13px;
padding-left: 20px;
padding-right: 20px;
position: relative;
line-height: 1.42857143;
color: #e9ebf0;
width: 100vh;
display: flex;
justify-content: flex-start;
flex-flow: row wrap;
align-items: flex-start;
}
`;

export const TodoItem = styled.div`
position: relative;
display: block;
min-height: 1px;
width: 90%;
  
`

export const TodoButtonsContainer = styled.div`
position: relative;
    display: flex;
    min-height: 1px;
    flex-direction: column;
    width: 10%;`
  


  export const DeleteButton = styled(RiDeleteBack2Fill)`
  color: #EB5353;
  `

export const EditButton = styled(FaEdit)`
color: #36AE7C
`