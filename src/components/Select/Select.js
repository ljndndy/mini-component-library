import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper tabindex="0">
      <Control value={value} onChange={onChange}>
        {children}
      </Control>
      <Presentation>
        {displayedValue}
        <SelectIcon strokeWidth={2} id="chevron-down"></SelectIcon>
      </Presentation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black}
  }
  &:focus {
    
  }
`;

const SelectIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
`;

const Control = styled.select`
  position: absolute;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
  appearance: none;
`;

const Presentation = styled.div`
  padding: 12px 8px 12px 16px;
  background-color: ${COLORS.transparentGray15};

  border-radius: 8px;
`;

export default Select;
