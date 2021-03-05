import React from "react"
import styled from 'styled-components';
import Photos from '../photos/Photos'
import Button from '../../atoms/Button/Button';

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  height: calc(100vh - 80px);
  
  h1 {
    font-size: 105px;
    margin: 0;
    line-height: 0.9;
  }

  p {
    margin: 60px 0 40px;
    width: 40%;
  }
`;

const Main = () => {
  return (
    <>
      <Wrapper>
        <Photos/>
        <h1>Uprawa cebuli</h1>
        <p>jakis tekst: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <Button>cos rob</Button>
      </Wrapper>
    </>
  )
}

export default Main