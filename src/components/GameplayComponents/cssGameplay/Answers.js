import styled from 'styled-components';

const ContainerAns = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;
  justify-content: center;  

  
  .container {
    background-color: ${({ theme }) => theme.main};
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 30px auto;
    
  }
  
  & .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.primary};
    width: 100%;
    
    @media (max-width: 768px) {
      flex-direction: column;
      
      & span {
        margin: 30px;
      }
    }

    & p {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.main};
      padding: 13px;
      border-radius: 5px;
      flex-shrink: 1;
    }
    
  }

  .timer {
    color: ${({ theme }) => theme.green};
    border-radius: 50%;
    height: 55px;
    width: 55px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.accent};
    

    & span {
      width: 100%;

    }
  }

  & .question {
    display: flex;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    color: ${({ theme }) => theme.main};
    height: 100px;
    align-items: center;
    justify-content: center;
    margin: 20px;
    width: 100%;

    & p {
      font-size: 1.5rem;
      width: 90%;
      text-align: center;
    }
  }
`;

export default ContainerAns;
