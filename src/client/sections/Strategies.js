import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Strategy from "./Strategy";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  outline:none;
 }
`;

const GET_STRATEGY = gql`
query {
  random {
    id
    text
  }
  }
`;

const Strategies = () => (
  <Query query={GET_STRATEGY}>
    {({ loading, error, data, refetch}) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      
      return (
          <div>
          <Strategy strategy={data.random}/>
          <Button onClick={() => refetch()}>Another</Button>
          </div>

      );
    }}
  </Query>
  );
export default Strategies;