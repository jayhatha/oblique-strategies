import React, {Component} from 'react';
import Navbar from "./sections/Navbar";
import Header from "./sections/Header";
import Body from "./sections/Body";
import Footer from "./sections/Footer";
import Strategies from "./sections/Strategies";
import { injectGlobal } from 'styled-components'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";

const Wrapper = styled.section `
  background: PaleTurquoise;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -ms-flex-align: center;
      align-items: center;
  box-sizing: border-box;
  padding: 0 20vh 70vh 20vh;
  @media (max-width: 600px) {\
   padding: 0 20vh 100vh 20vh;
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Domine');
  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  html, body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: PaleTurquoise;
  }
`;

class App extends Component {
    render() {
        return (
            <Wrapper className='app'>
            <Navbar />
            <ApolloProvider client={client}>
                <Strategies />
           </ApolloProvider>
            </Wrapper>
        );
    }
}

export default App;