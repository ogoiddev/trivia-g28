import styled from 'styled-components';

const Container = styled.div`

  background-color: ${({ theme }) => theme.primary};
  height: 100px;
  display:flex;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;


  & img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

  & div{
    display: flex;
    width: 100%;
    margin: 0 20px;
    justify-content: space-between;
  }

  & p{
    color: white;
    font-size: 26px;
  }

`;

export default Container;
