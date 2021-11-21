import React from 'react';

import useTheme from 'src/hooks/useTheme';
import styled, {ThemeProvider} from 'styled-components';

import Table from './Table';

function App() {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Table />
      </Container>
    </ThemeProvider>
  );
}

export default App;


const Container = styled.div`
width:100%;
height:100%;
display: flex;
`;
