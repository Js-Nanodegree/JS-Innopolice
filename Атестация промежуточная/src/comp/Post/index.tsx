/* eslint-disable max-len */
import React from 'react';

import {useSelector} from 'react-redux';
import ModalPost from 'src/comp/ModalPost';
import PostCard from 'src/comp/PostScreen';
import s from 'src/style';
import text from 'src/text';

import {Navigation} from '../Navigation';

export const Post = () => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const auth: string | null = useSelector((state: any) => state?.token?.token || null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!auth) {
    return (
      <div/>
    );
  }

  console.log(isModalVisible);

  return (
    <div className={s.card.main}>
      <div className={s.render.card}>
        <button className={s.container.nav} onClick={showModal}>
          <span className={s.text.navActionText}>{text.createPost}</span>
        </button>
      </div>
      <div className={s.card.grid}>
        <PostCard update={isModalVisible} />
      </div>
      <Navigation current={1} page={20} />
      <ModalPost
        auth={auth}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};
