import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'

const Switch = ({ sizeMultiplier }) => {
  const [isActive, setActive] = useState(true);
  const [props, set] = useSpring(() => ({
    left: '0%',
    transform: 'translateX(0%)',
  }))

  return (
    <StyledDiv sizemultiplier={sizeMultiplier}>
      <SwitchCircle
        onClick={() => {
          setActive(!isActive);
          set({
            left: isActive ? `calc(100%)` : `calc(0%)`,
            transform: isActive ? 'translateX(-100%)' : 'translateX(0%)'
          })
        }}
        style={props}
        sizemultiplier={sizeMultiplier}
      />
    </StyledDiv>
  )
}

const StyledDiv = styled(animated.div)`
  width: ${props => 100 * props.sizemultiplier}px;
  height: ${props => 40 * props.sizemultiplier}px;
  background-color: gray;
  border: 2px solid darkgray;
  border-radius: ${props => 50 * props.sizemultiplier}px;;
  position: relative;
`

const SwitchCircle = styled(animated.div)`
  width: ${props => 40 * props.sizemultiplier}px;
  height: ${props => 40 * props.sizemultiplier}px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: ${props => 50 * props.sizemultiplier}px;;
  position: absolute;
  left: 0;
  cursor: pointer;
`

export default Switch;

