import React from 'react';

import FooterBlock from 'src/comp/Footer';
import FormBlock from 'src/comp/Form';
import HeaderBlock from 'src/comp/Header';

const Screen=()=>{
  return (
    <div className="mx-auto">
      <HeaderBlock />
      <FormBlock />
      <FooterBlock />
    </div>
  );
};

export default Screen;


