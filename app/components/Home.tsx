import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 100px;
  text-align: center;
`;

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <Container data-tid="container">
        <h2>Home</h2>
        to Counter
      </Container>
    );
  }
}
