import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled, { keyframes } from 'styled-components';

const Link = Scroll.Link;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const Element = Scroll.Element;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  animation: 2s ${fadeIn} ease-in, 2s ${fadeOut} ease-out;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.header `
  font-family: 'Domine', serif;
  background: darkcyan;
  color: ghostwhite;
  animation: 1s ${fadeIn} ease-in;
  width: 80%;
  margin: 0 auto;
  padding-top: 5vw;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .italic {
    font-style: italic;
  }
  .signature {
    text-align: left;
  }
  a {
    color: white;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

class Header extends Component {
  render() {
    return (
    <Element name="header-element">
    <Wrapper onClick={() => this.props.toggleInfo()} className={this.props.info ? 'swingIn' : 'swingOut'}>
    <p> The Oblique Strategies were created by Brian Eno and Peter Schmidt in 1975 as a way of defeating creative roadblocks. They started out as a deck of cards, but there are now several digital versions. This one was built by <a href="http://www.jayhathaway.com/">Jay Hathaway</a></p>
    <p> For more detailed info, read Gregory Taylor's primer at <a href="http://www.rtqe.net/ObliqueStrategies/OSintro.html">rtqe.net</a>.</p>
    <p className='italic'>"These cards evolved from separate observations of the principles underlying what we were doing. Sometimes they were recognized in retrospect (intellect catching up with intuition), sometimes they were identified as they were happening, sometimes they were formulated.</p>
    <p className='italic'>They can be used as a pack (a set of possibilities being continuously reviewed in the mind) or by drawing a single card from the shuffled pack when a dilemma occurs in a working situation.  In this case the card is trusted even if its appropriateness is quite unclear.  They are not final, new ideas will present themselves, and others will become self-evident."</p>
    <p className='signature'>- Brian Eno and Peter Schmidt</p>
    </Wrapper>
      </Element>
    );
  }
}

export default Header;
