import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring'

const Switch = ({ sizeMultiplier = 1, animationPreset = "molasses" }) => {
  const getConfigPreset = () => {
    switch (animationPreset) {
      case 'default':
        return config.default;
      case 'gentle':
        return config.gentle;
      case 'wobbly':
        return config.wobbly;
      case 'stiff':
        return config.stiff;
      case 'slow':
        return config.slow;
      case 'molasses':
        return config.molasses;
      default:
        return config.default;
    }
  }

  const [isActive, setActive] = useState(false);
  const [props, set] = useSpring(() => ({ left: '0%', transform: 'translateX(0%)', config: getConfigPreset() }));

  return (
    <StyledDiv
      sizemultiplier={sizeMultiplier}
      onClick={() => {
        setActive(!isActive);
        set({
          left: isActive ? `calc(0%)` : `calc(100%)`,
          transform: isActive ? 'translateX(0%)' : 'translateX(-100%)'
        })
      }}
    >
      <SwitchCircle
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

