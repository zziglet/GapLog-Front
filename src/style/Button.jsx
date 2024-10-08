import React from 'react';
import styled from 'styled-components';

//전체 button style

const StyledButton = styled.button`
  width: 117px;
  height: 40px;
  font-family: 'Inter-Regular', Helvetica;
  padding: 6px 12px;
  color: #30180d;
  font-weight: 400;
  background-color: #eeddbb;
  border-radius: 8px;
  font-size: 16px;
  border: 1px solid #eeddbb;
  display: inline-block;
  text-align: center;

  &.grey {
    position: absolute;
    top: 190px;
    right: 100px;
    background-color: #c4c4c4;
    border: 1px solid #c4c4c4;
  }

  &.green {
    background-color: #5b9765;
    border: 1px solid #5b9765;
    color: white;
  }
`;

function Button(props) {
  const { title, onClick, className } = props;
  return (
    <StyledButton onClick={onClick} className={className}>
      {title || 'button'}
    </StyledButton>
  );
}

export default Button;
