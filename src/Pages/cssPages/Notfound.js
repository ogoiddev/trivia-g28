import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
  background-color:var(--main-color);
}`;

export const Container = styled.div`
margin-top: 24px;
text-align: center;

  & h2 {
    font-size: 2rem;
    color: var(--secondary-color);
  }

  & img {
    width: 500px
  }

`;
