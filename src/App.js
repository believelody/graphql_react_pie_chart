import React, { Component } from "react";
import styled from 'styled-components';
import TopLanguages from "./components/TopLanguages";
import data from "./data";

const WrapperPie = styled.div`
  width: 100%;
  height: 75vh;
  max-height: 600px;
  max-width: 600px;
  margin: 0 auto;
  font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
`;

export default class App extends Component {
  state = {
    repositories: null
  };

  componentDidMount() {
    this.setState({ repositories: data.data.viewer.repositories });
  }

  render() {
    return (
      <div>
        <WrapperPie>
          <h2 style={{ textAlign: "center" }}>Top Languages</h2>
          {this.state.repositories ? (
            <TopLanguages repositories={this.state.repositories} />
          ) : (
            <span>Loading...</span>
          )}
        </WrapperPie>
      </div>
    );
  }
}
