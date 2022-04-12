import styled from 'styled-components';

// --main-color: #f9f9f9;
// --secondary-color: #031029;
// --accent-color: #FFCD29;

export const Container = styled.div`
align-items: center;
background-color:var(--accent-color);
display: flex;
flex-direction: column;
height: 50%;
width: 33%;
margin: auto;
margin-top: 120px;
justify-content: space-evenly;

  & h1 {
  font-size: 2.5em;
  }

  & span {
  font-size: 1.4em;
  }

  & button {
    background-color: var(--secondary-color);
    color: var(--main-color);
    height: 55px;
    width: 50%;
    border: 1px solid var(--main-color);
    
  }

`;

export default Container;
