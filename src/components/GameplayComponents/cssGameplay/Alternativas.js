import styled from 'styled-components';

export const ContainerAlt = styled.div`
display: flex;
flex-direction: column;
margin: 0 20px;
font-size:600px;
align-items: center;

  
`;

export const Buttons = styled.button`
  width: 550px;
  height: 50px;
  background-color: white;
  border-color: #f9f9f9;
  margin-top: 3px;
  cursor: pointer;
  border: 2px solid lightgrey;

  &:disabled {
    cursor: default;
    border: 3px solid ${(props) => (`${props.id}` === 'correct-answer'
    ? 'rgb(6, 240, 15)' : 'rgb(255, 0, 0)')};
  }
`;

export const ProxButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  font-size:600px;
  align-items: center;

& button {
  margin-top: 20px;
  width: 250px;
  height: 50px;
  background-color: #FFCD29;
  border: 2px solid #FFCD29;
  cursor: pointer;
}`;
