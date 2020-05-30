import React from 'react';
import Switch from './Components/Switch'
import styled from 'styled-components';
import { config } from 'react-spring'

const App = () => {
  const Switches = Object.entries(config).map(item => {
    const [name, configObject] = item;
    return (
      <SwitchLabelContainer key={name}>
        <p>{`${name} spring settings`}</p>
        <Switch animationPreset={configObject} />
      </SwitchLabelContainer>
    )
  });

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
