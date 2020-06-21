import React, { Component } from "react";
import { render } from "react-dom";
import App from './App'

class App2 extends Component {
    constructor(props) { super(props) }

    render() {
        return (
            <App />
        );
    }
}

export default App2;

const container = document.getElementById("app");
render(<App2 />, container);