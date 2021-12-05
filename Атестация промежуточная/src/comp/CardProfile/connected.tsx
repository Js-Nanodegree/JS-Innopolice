/* eslint-disable max-len */
import React from 'react';

import Screen from './Screen';

const Connecter = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  console.log(modal);


  return (
    <Screen
      date="14.07.1990"
      email="js-nanodegree@gmail.com"
      gender="Мужской"
      img={['https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300']}
      logo={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}
      name="Якимов Вячеслав Александрович"
      phone="+79961049357"
      setModal={() => setModal(true)}
    />
  );
};

export default Connecter;
