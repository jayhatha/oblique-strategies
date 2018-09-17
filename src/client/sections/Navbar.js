import React, { Component } from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
import styled, { keyframes } from 'styled-components';
import {QuestionCircle} from 'styled-icons/fa-solid';

const Wrapper = styled.nav`
  width: 100%;
  font-family: 'Domine', serif;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  padding: 0 0.5em;
  height: auto;
  background-color: PaleTurquoise;
  transition: background 300ms ease-out;
  color: white;
  `
const Navlist = styled.ul`
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  list-style-type: none;
  text-align: right;
  font-size: 1em;
  display: inline-block;
    li {
      display: inline-block;
      padding: 0 0.5em;
    }
`
const zoomIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const Logo = styled.h1`
    font-size: 1.5em;
    margin: 0.4em auto;
    display: inline-block;
    text-align: center;
`

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <a onClick={() => scroll.scrollToTop()}>
          <Logo>Oblique Strategies</Logo>
        </a>
        <Navlist>
          <li>
          <QuestionCircle size="16" onClick={() => this.props.toggleInfo()}/>
          </li>
        </Navlist>
        {this.props.info &&  
        (<p>Hello Info</p>)
        }
      </Wrapper>
    )
  }
}

export default Navbar;