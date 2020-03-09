// SYSTEM IMPORTS
import React from "react";
import ReactDOM from "react-dom";

// TESTING TOOL IMPORTS
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";

// COMPONENTS TO BE TESTED
import App from "../App.js";
import HelpButton from "../components/HelpButton.js";
import PlayingCard from "../components/PlayingCard.js";
import Tabletop from "../components/Tabletop.js";

/* CONFIGURE ENZYME */
Enzyme.configure({ adapter: new Adapter() });

/* SET OF TESTS FOR FIRST DEVELOPMENT CYCLE */
describe('CYCLE 1 TESTS', () => {



  var helpButtonWrapper = shallow(<HelpButton showing={false}/>); // get App component
  var playingCardWrapper = shallow(<PlayingCard suit="heart" value="5"/>); // get SidePanel component
  var tabletopWrapper = shallow(<Tabletop/>);

  var helpButtonInstacne = helpButtonWrapper.instance();
  var playingCardInstance = playingCardWrapper.instance();
  var tabletopInstance = tabletopWrapper.instance();

  /* TEST #1 - COMPONENTS RENDER CORRECTLY */

  it('COMPONENTS RENDER CORRECTLY', () => {
    const { asFragment } = render(<App/>); // GENERATES SNAPSHOT OF TABLETOP
    expect(asFragment()).toMatchSnapshot(); // CHECKS IF SNAPSHOT MATCHES RECENTLY RENDERED COMPONENT
  })

  describe('test flipping of the card', () => {
    it('change the value of side when click is simulated', () => {
      const wrapper = shallow(<PlayingCard suit="heart" value="5" color="red"/>);
      wrapper.simulate('click');
      expect(wrapper.state('side')).toBe('back');
    });
  });

});
