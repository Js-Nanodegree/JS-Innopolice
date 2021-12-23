/* eslint-disable max-len */
import React from 'react';

import Api from 'src/api';

import ScreenModal from './screen';

export interface iState {
  birthday?: string;
  uuid?: string;
  createAt?: string;
  email?: string;
  name?: string;
  phone?: string;
  gender?: string;
}

const ModalPost = ({
  handleCancel,
  setIsModalVisible,
  isModalVisible,
  auth,
}: any) => {
  const [state, setState] = React.useState({});

  const handleOk = () => {
    Api.updateProfile(state).then((data) => {
      console.log(data);
      setIsModalVisible(false);
    });
  };

  const fileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const response = await Api.uploadFile(file);
    return setState((prev: any) => ({...prev, 'logo': response}));
  };

  React.useEffect(() => {
    if (auth) {
      try {
        Api.getCurrentUser(auth).then(({data}: any) => {
          console.log(data);
          setState((prev) => ({
            ...prev, ...data[0],
          }));
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const onChenUpdateAnge = (e: any) => {
    setState((prev: iState) => ({...prev, [e.target.name]: e.target.value}));
  };

  console.log({state});

  return (
    <ScreenModal
      fileChange={fileChange}
      handleCancel={handleCancel}
      handleOk={handleOk}
      isModalVisible={isModalVisible}
      state={state}
      onChenUpdateAnge={onChenUpdateAnge}
    />
  );
};

export default ModalPost;
