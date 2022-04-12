import styled from 'styled-components';

const ContainerAns = styled.div`

  margin-top: 100px;

  & .head {
    display: flex;
    flex-direction: row-reverse;
    margin: 0 20px;
    justify-content: space-around;

    & p {
      font-size: 20px;
      font-weight: bold;
    }

    & p:first-child {
      color: red;
    }
  }

  & .question {
    display: flex;
    background-color: #031029;
    color: white;
    height: 100px;
    align-items: center;
    justify-content: center;
    margin: 5px 20px;
  
  & p {
    font-size: 18px;
    }
  }
`;

export default ContainerAns;
