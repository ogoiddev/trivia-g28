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

  & p , span {
    color: ${({ theme }) => theme.main};
    font-size: 26px;
  }

`;

export default Container;
