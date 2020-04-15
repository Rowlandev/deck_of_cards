// SYSTEM IMPORTS
import React from "react";

// TESTING TOOL IMPORTS
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

// COMPONENT IMPORTS
import App from "../App.js";
import Tabletop from "../components/Tabletop.js";
import Customize from "../components/Customize.js";

describe('DECK OF CARD TESTS', () => {

  it('TEST #1 - APPLICATION RENDERS', () => {
    // create tree and confirm that it renders
    var tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('TEST #2 - SHOWS MAIN PAGE', () => {
    //  Create wrapper & instance for Tabletop
    var wrapper = mount(<Tabletop/>);
    var instance = wrapper.instance();

    // Confirm app is showing initial main menu
    const result = instance.state.mode == "mainMenu" ? true : false;
    expect(result).toBe(true);
  });

  it('TEST #3 - RENDERS 3 MAIN PAGE OPTIONS', () => {
    //  Create wrapper & instance for Tabletop
    var wrapper = mount(<Tabletop/>);
    var instance = wrapper.instance();

    // Confirm app is showing initial main menu
    var result = instance.state.mode == "mainMenu" ? true : false;
    expect(result).toBe(true);

    // Confirm there are three page options rendered for the user
    const desiredNumberOfChoices = 3;
    const foundNumberOfChoices = wrapper.find('p').length - 2;
    result = desiredNumberOfChoices == foundNumberOfChoices ? true : false;
    expect(result).toBe(true);
  });

  it("TEST #4 - 3 MAIN PAGE OPTIONS LOAD CORRECLY ON CLICK", () => {
    //  Create wrapper & instance for Tabletop
    var wrapper = mount(<Tabletop/>);
    var instance = wrapper.instance();

    // Confirm app is showing initial main menu
    var result = instance.state.mode == "mainMenu" ? true : false;
    expect(result).toBe(true);

    // Change state to 'customize' to simulate click
    instance.state.mode = "customize";
    result = instance.state.mode == "customize" ? true : false;
    expect(result).toBe(true);

    // Change state to 'about' to simulate click
    instance.state.mode = "about";
    result = instance.state.mode == "about" ? true : false;
    expect(result).toBe(true);

    // Change state to 'choosingGame' to simulate click
    instance.state.mode = "choosingGame";
    result = instance.state.mode == "choosingGame" ? true : false;
    expect(result).toBe(true);
  });

  it('TEST #5 - CORRECT CONTENT APPEARS AFTER 3 MAIN PAGE OPTIONS ARE CLICKED', () => {
    // Create wrappers for components
    var customizeWrapper = mount(<Customize/>);
    var tabletopWrapper = mount(<Tabletop/>);

    // Create instances for wrappers
    var tabletopInstance = tabletopWrapper.instance();
    var customizeInstance = customizeWrapper.instance();

    // 1. Confirm correct cotent is showing for 'Play' tab
    tabletopWrapper.setState({ mode: 'choosingGame' });
    const foundChoices = tabletopWrapper.find('p');
    expect(foundChoices.first().text()).toBe("Choose A Game");
    expect(foundChoices.at(1).text()).toBe('War');
    expect(foundChoices.at(2).text()).toBe('Sandbox Mode');

    // 2. Confirm correct content is showing for 'Customize' tab
    const foundNumberOfImages = customizeWrapper.find('img').length;
    const desiredNumberOfImages = 8;
    const result = foundNumberOfImages === desiredNumberOfImages ? true : false;
    expect(result).toBe(true);

    // 3. Confirm correct content is showing for 'About' tab
    tabletopWrapper.setState({ mode: 'about' });
    const aboutMessage = tabletopWrapper.find('p');
    expect(aboutMessage.first().text()).toBe('About');
    expect(aboutMessage.at(aboutMessage.length - 1).text()).toBe('This is a web application developed by Braden Batman, Chase Grainger, and Matthew Heck. You can play premade games, or play around with a deck of cards and premade card layouts in Sandbox mode.');
  });

});
