// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../shared/Button';
import {
  IC_MASK,
} from '../../utils/Icons';

const Container = styled.div`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type Props = {
  history?: any;
}

function Page(props: Props) {
  return (
    <Container>
      <div
        data-testid='myText'
      >dooboolab</div>
    </Container>
  );
}

export default Page;
