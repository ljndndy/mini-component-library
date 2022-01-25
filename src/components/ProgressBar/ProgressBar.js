/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--borderRadius': '8px',
    '--padding': '4px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <Wrapper style={styles}>{value}</Wrapper>;
};

const Wrapper = styled.div`
  --borderRadius: 4px;
  --padding: 0;

  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  &::before {
    content: '';
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
