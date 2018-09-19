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
  background: darkcyan;
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
   padding: 0 5vh 100vh 5vh;
  }
`;

const client = new ApolloClient();

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Domine');
  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  html, body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: darkcyan;
  }
`;



class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            showInfo: false
        }
        this.toggleInfo = this.toggleInfo.bind(this)
      }

     toggleInfo = () =>  {
        this.setState(prevState => ({
            showInfo: !prevState.showInfo
        })); 
    }
  
    render() {
        return (
            <Wrapper className='app'>
            <Navbar toggleInfo={this.toggleInfo} info={this.state.showInfo}/>
            {this.state.showInfo && 
            (<Header toggleInfo={this.toggleInfo} info={this.state.showInfo}/>)
        }
            <ApolloProvider client={client}>
                <Strategies />
           </ApolloProvider>
            </Wrapper>
        );
    }
}

export default App;