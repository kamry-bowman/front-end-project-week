import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50px;
  height: 20px;
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  position: absolute;
  z-index: 1;
  margin: 0;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;
  
`;

const Switch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: green;
  transition: background-color 300ms;
  border-radius: 10px;
  &.toggled {
    background-color: orange;
  }
`;

const Slider = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: white;
  transition: transform 300ms;
  
  &.toggled {
    transform: translateX(30px);
  }
`;

function Toggle(props) {
  const [toggled, setToggled] = useState(false);
  const handleUpdate = (event) => {
    setToggled(prevToggled => !prevToggled);
    props.handleToggle();
  };

  return (
    <Container>
      <Input type="checkbox" checked={toggled} onChange={handleUpdate} />
      <Switch className={toggled ? 'toggled' : undefined}>
        <Slider className={toggled ? 'toggled' : undefined} />
      </Switch>
    </Container>
  );
}

export default Toggle;
