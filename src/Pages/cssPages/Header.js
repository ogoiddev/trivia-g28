import styled from 'styled-components';

const Container = styled.div`

  background-color: ${({ theme }) => theme.primary};
  height: 100px;
  display:flex;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 0 15px;


  & .pontos-container {
    background-color: ${({ theme }) => theme.main};
    border-radius: 5px;
    font-family: monospace;
    text-align: center;
    width: 150px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
  }
  
  & img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  
  & .name-container {
    display: flex;
    width: 95%;
    height: 95%;
    margin: 0 20px;
    align-items: center;
    
    & p {
      margin-left: 35px;
      @media (max-width: 768px) {
        font-size: 100%;
        transition: 1s;
      }
    }

  }


    
  }
  
  @media (max-width: 768px) {
    
    
    & span {
      display: none;
    }
    
    & span {
      margin: 30px;
    }
    
  }
  
  & .name {
    color: ${({ theme }) => theme.main};
  }
  
  & p , span {
    color: ${({ theme }) => theme.green};
    font-size: 1.5rem;
    font-weight: bold;
    
  }
  
  `;

export default Container;
