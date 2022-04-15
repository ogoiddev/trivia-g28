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
  font-weight: 800;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    width: 100%;
    transition: 1s;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 9px #111;
    transition: 0.3s;
  }

  &:disabled {
    cursor: default;
    border: 3px solid ${(props) => (`${props.id}` === 'correct-answer'
    ? 'rgb(6, 240, 15)' : 'rgb(255, 0, 0)')};
    background-color: ${(props) => (`${props.id}` === 'correct-answer'
    ? 'rgb(6, 240, 15)' : 'rgba(255, 0, 0, 5%)')};
    color: #f00;
  }
`;

export const ProxButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  font-size:600px;
  align-items: center;
  

& button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    width: 250px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    margin-top: 18px;
    border: none;
    position: absolute;
  
    &:disabled {
      color: #f11;
      font-weight: 700;
    }

    &:active {
      transform: translate(1px, 1px)
    }
  }
`;
