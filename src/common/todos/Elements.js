import styled from 'styled-components'

export const TodoContainer = styled.div`
margin-top: 12px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: clamp(1rem, 2vw,5rem)
`

export const TodoHeader = styled.div`
text-align: center;
background-color: #0AA1DD;
color: white;
padding: 1rem 2rem;
width: 100vh;
margin: 8px;
margin-top: 16px;
`
export const CounterBar = styled.div`
margin-bottom: 8px;
`
export const ClearButton = styled.button`
padding: 8px;
background-color: #EB5353;
color: white;
border: none;
`
export const DeletedItemHeader = styled.div`
background-color: #0AA1DD;
color: white;
text-align: center;
padding: 12px 36px;
margin: 8px;
width: 100vh;
margin-top: 16px;
`
