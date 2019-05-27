import * as React from 'react';
import { Component } from 'react';
import styled from "styled-components";

import Home from '../components/Home';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

export default class HomePage extends Component {
  render() {
    return (<Container>
      Hello WOrld
      <Home />
    </Container>);
  }
}
