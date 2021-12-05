import React from 'react';

// import FormBlock from 'src/comp/Form';
import styled from 'styled-components';

const FormRegister = styled.div`
margin:auto;
display:flex;
align-items: center;
justify-content: center;
`;


const Router = ({children}: any) => {
  return (
    <div className="flex-grow flex flex-col">
      <FormRegister className="w-full h-2/3 flex-col flex overflow-y-scroll" >
        {children}
      </FormRegister>
    </div>
  );
};


const Screen = () => {
  return (
    <Router>
    </Router>

  );
};

export default Screen;


