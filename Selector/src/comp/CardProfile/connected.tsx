/* eslint-disable max-len */
import React from 'react';

import {useSelector} from 'react-redux';
import {
  useLocation,
} from 'react-router-dom';
import Api from 'src/api';
import ModalPost from 'src/comp/ModalProfile';

import Screen from './Screen';


const Connecter = () => {
  const [state, setState] = React.useState<any>({});
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const location = useLocation();
  const auth = useSelector((state: any) => state?.token?.token || null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const user = location.pathname.split('/')?.[2] || auth;

  React.useEffect(() => {
    console.log({user});
    try {
      Api.getCurrentUser(user).then(({data}: any) => setState(data?.[0] || {}));
    } catch (e) {
      console.log(e);
    }
  }, [user]);

  console.log(auth === state.uuid && state?.uuid);

  return (
    <>
      <Screen
        date={state?.birthday}
        email={state?.email}
        gender={state?.gender === true ? 'Мужской' : 'Женский'}
        img={['https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300', 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300']}
        logo={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}
        name={state?.name}
        phone={state?.phone}
        showModal={showModal}
        uuid={auth === state.uuid && state?.uuid}
      />
      <ModalPost
        auth={auth}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default Connecter;