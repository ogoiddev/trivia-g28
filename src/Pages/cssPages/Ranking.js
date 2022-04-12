import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 230px;
  height: 100%;

    & h1 {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-size: 1.5rem;
    }

    & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    & span {
    color: ${(props) => props.theme.primary};
    margin-right: 20px;
    }

    & span.user {
    color: ${(props) => props.theme.primary};
    flex-grow: 2;
    margin-left: 8px ;
    margin-right: 0;
    }

    & .btn {
    background-color: ${(props) => props.theme.accent};
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.green};
    
    border: none;
  
    &:disabled {
      color: #f11;
      font-weight: 700;
    }
  }

`;

export default Container;
