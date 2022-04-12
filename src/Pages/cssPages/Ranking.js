import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
  background-color:var(--secondary-color);
}`;

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin: auto;
margin-top: 100px ;

    & h1 {
    text-align: center;
    color: var(--accent-color);
    font-size: 2.5rem;
    }

    & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--azul-light) ;
    }

    & span {
    color: var(--main-color);
    margin-right: 20px;
    font-size: 2rem;
    }

    & span.user {
    color: var(--accent-color);
    flex-grow: 2;
    margin-left: 8px ;
    margin-right: 0;
    }
    & button {
      background-color: var(--secondary-color);
      color: var(--accent-color);
      height: 55px;
      border: 1px solid var(--azul-light);
      width: 80%;
      margin: auto;
    }

`;
