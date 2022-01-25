/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--borderRadius': '8px',
    '--padding': '4px',
    '--height': '24px'
  },
  medium: {
    '--height': '12px'
  },
  small: {
    '--height': '8px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  let progress = value*1;
  if (progress < 0) {progress = 0;}
  if (progress > 100) {progress = 100;}

  return <Wrapper style={styles} progress={progress}>{value}</Wrapper>;
};

const Wrapper = styled.div`
  --borderRadius: 4px;
  --progressRadius: ${props => props.progress >= 99 ? '4px' : '4px 0 0 4px'};
  --padding: 0;

  border-radius: var(--borderRadius);
  padding: var(--padding);

  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  height: var(--height);

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress + '%'};
    background-color: ${COLORS.primary};

    border-radius: var(--progressRadius);
  }
`;

export default ProgressBar;
