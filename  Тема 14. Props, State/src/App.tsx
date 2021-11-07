import React from 'react';

import styled from 'styled-components';

import Table from './Table';


function App() {
  return (
    <Container>
      <Table/>
    </Container>
  );
}

export default App;


const Container = styled.div`
width:100%;
height:100%;
display: flex;
`;
