import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring'

const Switch = ({ sizeMultiplier = 1, animationPreset = config.default }) => {
  const [isActive, setActive] = useState(false);
  const [props, set] = useSpring(() => ({
    left: '0%',
    transform: 'translateX(0%)',
    backgroundColor: 'rgb(128, 128, 128)',
    borderColor: 'rgb(169,169,169)',
    config: { ...animationPreset, clamp: true }
  }));

  return (
    <StyledDiv
      sizemultiplier={sizeMultiplier}
      style={{ backgroundColor: props.backgroundColor, borderColor: props.borderColor }}
      onClick={() => {
        setActive(!isActive);
        set({
          left: isActive ? `calc(0%)` : `calc(100%)`,
          backgroundColor: isActive ? 'rgb(128, 128, 128)' : 'rgb(173, 255, 47)',
          borderColor: isActive ? 'rgb(169,169,169)' : 'rgb(127, 255, 0)',
          transform: isActive ? 'translateX(0%)' : 'translateX(-100%)'
        })
      }}
    >
      <SwitchCircle
        style={{ left: props.left, transform: props.transform }}
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
  cursor: pointer;
`

const SwitchCircle = styled(animated.div)`
  width: ${props => 40 * props.sizemultiplier}px;
  height: ${props => 40 * props.sizemultiplier}px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: ${props => 50 * props.sizemultiplier}px;;
  position: absolute;
`

export default Switch;

