import React from 'react';
import styled, { keyframes } from 'styled-components';

const flippo = keyframes`
0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
100% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            
  }
`;

const fadein = keyframes`
0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
            opacity: 0;
  }
100% {
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            opacity: 1;
            
  }
`;

const Card = styled.div `
  height: 100%;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  animation: ${flippo} 1s;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  div {
    animation: ${fadein} 1s;
    background: ghostwhite;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    font-size: 1.4rem;
    border-radius: 10px;
    text-align: center;
    padding: 15px;
    height: 25vw;
    width: 40vw;
    @media (max-width: 600px) {
        font-size: 1.2rem;
        border-radius: 10px;
        text-align: center;
        padding: 15px;
        height: 45vw;
        width: 80vw;
       }
  }
`;




const Strategy = (props) => (
    <Card key={props.strategy.id}>
        <div>
        <p>{props.strategy.text}</p>
        </div>
    </Card>
);
export default Strategy;