import styled from 'styled-components';
import { FaTools } from 'react-icons/fa';
import back from '../../images/back.jpeg';

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  * {
    flex-shrink: 1;
  }

  & .btn-theme {
    background-color: ${(props) => props.theme.accent};
    width: 130px;
    height: 24px;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.green};
    border: none;
    border-radius: 0 0 10px 0;
    z-index: 1;
    position: absolute;
    top: 100px;
    left: 0;

    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.main};
      transition: 0.5s;
    }
  }

  & .logo-trivia {
    max-width: 50%;
    margin: 30px;
    animation: shake infinite 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  
  @keyframes shake {

    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  
`;

export const ContainerForm = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  background-image: url${back};
  color: ${(props) => props.theme.main};
  border-radius: 3px;
  display: flex;
  height: 430px;
  justify-content: center;
  width: 350px;
`;

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  height: 75%;
  justify-content: space-between;
  min-height: 300px;
  text-align: center;
  width: 70%;

  & label {
    height: 40px;
    width: 100%;
    font-weight: 800;
  }
  
  & input {
    height: 100%;
    padding: 5px 10px;
    width: 100%;
    margin-top: 12px;
  }

  & .btn {
    background-color: ${(props) => props.theme.accent};
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.green};
    margin-top: 18px;
    border: none;
  
    &:disabled {
      color: #f11;
      font-weight: 700;
    }

    &:active {
      transform: translate(1px, 1px)
    }
  }
  
`;

export const BtnIcon = styled(FaTools)`
  font-size: 2.5rem;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 
    100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  color: ${({ theme }) => theme.main};
  margin-top: 35px;
`;
