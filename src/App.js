import React from 'react';
import Switch from './Components/Switch'
import styled from 'styled-components';

const App = () => {
  const Switches = ['stiff', 'default', 'gentle', 'wobbly', 'slow', 'molasses'].map(item => (
    <SwitchLabelContainer>
      <p>{`${item} spring settings`}</p>
      <Switch animationPreset={item} />
    </SwitchLabelContainer>
  ))

  return (
    <Container>
      {Switches}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 20px;
`

const SwitchLabelContainer = styled.div`
  font-family: 'montserrat', sans-serif;
  padding: 20px;
`

export default App;
