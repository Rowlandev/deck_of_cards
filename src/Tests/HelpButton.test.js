
// SYSTEM IMPORTS
import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS TO BE TESTED
import HelpButton from "../components/HelpButton.js";

// TESTING TOOL IMPORTS
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

/* Test #1 */
it('HelpButton renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelpButton/>, div);
});
