import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Routes } from "../constants/routes";

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
        <Link to={Routes.COUNTER}>to Counter</Link>
      </Container>
    );
  }
}
