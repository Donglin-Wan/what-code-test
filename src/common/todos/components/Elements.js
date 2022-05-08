import styled from 'styled-components';
import { RiDeleteBack2Fill } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
`;

export const TodoButtonsContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 1px;
  flex-direction: column;
  width: 10%;
`;

export const DeleteButton = styled(RiDeleteBack2Fill)`
  color: #eb5353;
`;

export const ButtonWrapper = styled(Link)``;

export const EditButton = styled(FaEdit)`
  color: #36ae7c;
`;
export const TodoForm = styled.form``;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const TitleHeader = styled.p``;

export const Title = styled.input`
  font-family: 'Nunito Sans', sans-serif;
  font-family: monospace;
  outline: none;
`;

export const ContentHeader = styled.p``;

export const Content = styled.textarea.attrs({ cols: '90', rows: '5' })`
  font-family: 'Nunito Sans', sans-serif;
  font-family: monospace;
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  outline: none;
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: 'Submit',
})`
  color: #ffffff;
  font-family: 'Nunito Sans', sans-serif;
  font-family: monospace;
  height: 40px;
  font-size: 17px;
  width: 100%;
  background-color: #f9bc64;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  padding: 8px 15px;
  font-weight: 300;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  touch-action: manipulation;
  border: 1px solid transparent;
  text-decoration: none;
  @media only screen and (max-width: 450px) {
    height: 38px;
  } ;
`;

export const DetailWrapper = styled.div``;

export const DetailContent = styled.p`
  font-family: 'Nunito Sans', sans-serif;
  font-family: monospace;
  height: 40px;
  line-height: 1.42857143;
`;
