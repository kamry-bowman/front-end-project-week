import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.danger ? props.theme.color.buttonDangerBG : props.theme.color.buttonBG)};
  color: ${props => props.theme.color.buttonText};
  font-size: ${props => props.theme.dimensions.button.fontSize};
  font-family: ${props => props.theme.font.heading};
  min-width: ${props => props.theme.dimensions.button.width};
  min-height: ${props => props.theme.dimensions.button.height};
  border: ${props => props.theme.dimensions.button.borderWidth} solid
    ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.button.borderRadius};
  margin: ${props => props.theme.dimensions.button.margin};
  padding: ${props => props.theme.dimensions.button.padding};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default (props) => {
  return <Button {...props}>{props.children}</Button>;
};
