/* eslint-disable max-len */
import React from 'react';

import Api from 'src/api';

import ScreenModal from './screen';

const ModalPost = ({
  handleCancel,
  setIsModalVisible,
  isModalVisible,
  auth,
}: any) => {
  const [state, setState] = React.useState({
    'image': {
      'title': '',
      'url': 'https://i.ibb.co/nPJVbdG/f778d582-f8cd-4c7e-bd66-db53b3d56819.jpg',
    },
    'message': '',
    'profile': {'name': '', 'uuid': ''},
  });
  const [error, setError]=React.useState<any>({});

  const ref = React.useRef('');

  const handleOk = () => {
    if (!ref.current) {
      setError({'message': 'message not found'});
      return;
    }
    if (!state?.profile.uuid) {
      setError({'message': 'userNotFound'});
      return;
    }
    Api.createPost({...state, 'message': ref.current}).then(({error}:any) => {
      if (error) {
        setError(error);
        return;
      }

      setIsModalVisible(false);
    });
  };

  const fileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const response = await Api.uploadFile(file);
    return setState((prev: any) => ({...prev, 'image': response}));
  };

  React.useLayoutEffect(() => {
    if (auth) {
      try {
        Api.getCurrentUser(auth).then(({data}: any) =>
          setState((prev) => ({
            ...prev,
            'profile': data?.[0] || {},
          })),
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <ScreenModal
    error={error}
      fileChange={fileChange}
      handleCancel={handleCancel}
      handleOk={handleOk}
      innerRef={ref}
      isModalVisible={isModalVisible}
      state={state}
    />
  );
};

export default ModalPost;
