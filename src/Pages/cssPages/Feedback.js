import styled from 'styled-components';

export const Container = styled.div`
align-items: center;
background-color: ${(props) => props.theme.main};;
display: flex;
flex-direction: column;
height: 50%;
width: 33%;
margin: auto;
margin-top: 120px;
justify-content: space-evenly;
color: ${(props) => props.theme.primary};

  & h1 {
  font-size: 2.5em;
  }

  & span {
  font-size: 1.4em;
  }

  & .btn {
    background-color: ${(props) => props.theme.accent};
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.green};
    margin-top: 18px;
    border: none;
  
    &:disabled {
      color: #f11;
      font-weight: 700;
    }
  }

`;

export default Container;
