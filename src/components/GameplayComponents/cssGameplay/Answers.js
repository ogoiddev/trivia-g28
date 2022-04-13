import styled from 'styled-components';

const ContainerAns = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 90%;
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
    flex-direction: row-reverse;
    justify-content: space-around;
    color: ${({ theme }) => theme.primary};
    width: 90%;
    
    & p {
      font-size: 20px;
      font-weight: bold;
    }
    
    
  }

  .timer {
    color: ${({ theme }) => theme.green};
    border-radius: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    background-color: ${({ theme }) => theme.accent};

    & span {

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
