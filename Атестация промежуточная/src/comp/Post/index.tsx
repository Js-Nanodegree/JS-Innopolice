import React from 'react';

import {Modal} from 'antd';
import {useSelector} from 'react-redux';
import Api from 'src/api';
import PostCard from 'src/comp/PostScreen';
import s from 'src/style';

import {Navigation} from '../Navigation';

const text = {
  'createPost': 'Написать пост',
};

export const Post = () => {
  const [state, setState] = React.useState({
    'message': '',
    'profile': {'name': '', 'uuid': ''},
  });
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const auth = useSelector((state: any) => state?.token?.token || null);

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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={s.card.main}>
      <div className={s.render.card}>
        <button className={s.container.nav} onClick={showModal}>
          <span className={s.text.navActionText}>{text.createPost}</span>
        </button>
      </div>
      <div className={s.card.grid}>
        <PostCard />
      </div>
      <Navigation current={1} page={20} />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <div className={s.render.wrapper}>
          <div className={s.container.border}>
            <div className={s.render.header}>
              <img className={s.image.logo}></img>
              <div className={s.render.header_name}>
                <span className={s.text.name}>{state?.profile?.name}</span>
                <span className={s.text.date}> {state?.profile?.uuid} </span>
              </div>
            </div>
            <div className={s.container.image}>
              <div className={s.container.mock}>ds</div>
            </div>
            <div
              contentEditable
              suppressContentEditableWarning
              className={[s.container.desc, s.text.desc_light].join(' ')}
              placeholder="введите текст для поста "
              onChange={(e: any) =>
                setState((prev: any) => ({
                  ...prev,
                  'message': e.target.value,
                }))
              }
            >
              {state?.message}
              {/* <span className={s.text.desc_light}>{state}</span> */}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
