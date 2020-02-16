// SYSTEM IMPORTS
import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS TO BE TESTED
import Tabletop from "../components/Tabletop.js";

// TESTING TOOL IMPORTS
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

/* Test #1 */
it('Tabletop renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tabletop/>, div);
});
