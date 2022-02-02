import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    stroke: 1,
    fontSize: 14,
    height: 16
  },
  large: {
    stroke: 2,
    fontSize: 18,
    height: 21
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  
  const styles = SIZES[size];
  
  return (
  <Wrapper style={{ '--width': width + 'px'}}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{'--size': styles.height + 'px' }}>
      <Icon id={icon} size={styles.height} strokeWidth={styles.stroke}></Icon>
    </IconWrapper>
    <TextInput style={{'--height': styles.height + 'px', '--fontSize': styles.fontSize / 16 + 'rem', '--borderSize': styles.stroke + 'px'}} type="text" placeholder={placeholder}></TextInput>
  </Wrapper>);
};  

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: var(--width);

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  width: var(--size);
  height: var(--size);

  position: absolute;
  left: 0;
  top: 0;
  margin: auto;

  pointer-events: none;
`;

const TextInput = styled.input`
  border: none;
  border-bottom: var(--borderSize) solid ${COLORS.black};

  padding: 0;
  padding-left: 24px;
  padding-bottom: 4px;

  width: 100%;

  font-size: var(--fontSize);
  line-height: var(--height);
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
