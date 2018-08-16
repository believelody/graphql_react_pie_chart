import React, { Component } from "react";
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TopLanguages from "./components/TopLanguages";
//import data from "./data";

const WrapperPie = styled.div`
  width: 100%;
  height: 75vh;
  max-height: 600px;
  max-width: 600px;
  margin: 0 auto;
  font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
`;

const REPOSITORIES = gql`{
  viewer {
    repositories(last: 100, isFork: false) {
      nodes {
        name
        description
        url
        languages(first: 5) {
          nodes {
            color
            name
          }
        }
      }
    }
  }
}`;

export default class App extends Component {

  render() {
    return (
      <div>
        <WrapperPie>
          <h2 style={{ textAlign: "center" }}>Top Languages</h2>
          <Query query={REPOSITORIES} variables={{}}>
          {
            ({ data, loading }) =>
            loading ?
            <span>Loading your data...</span> :
            <TopLanguages repositories={data.viewer.repositories} />
          }
          </Query>
        </WrapperPie>
      </div>
    );
  }
}
