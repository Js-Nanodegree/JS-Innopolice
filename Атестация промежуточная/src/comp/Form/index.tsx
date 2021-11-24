import React from 'react';

import FormRegister from './Form';

const text={
  'register': 'Регистрация',
};

 const FormBlock = () => {
  return (
    <FormRegister>
      <div>
        {text.register}
      </div>
    </FormRegister>
  );
};

export default FormBlock;
