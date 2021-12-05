import React from 'react';

import {Modal} from 'antd';
import s from 'src/style';

 const ScreenModal = ({
  fileChange, isModalVisible, handleOk, handleCancel, state, innerRef,
}: any) => {
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <div className={[s.render.wrapper, 'scroll', 'h-full'].join(' ')}>
        <div className={s.container.border}>
          <div className={s.render.header}>
            <img className={s.image.logo}></img>
            <div className={s.render.header_name}>
              <span className={s.text.name}>{state?.profile?.name}</span>
              <span className={s.text.date}> {state?.profile?.uuid} </span>
            </div>
          </div>
          <div className={[s.container.image, s.container.imageSet].join(' ')}>
            {state?.image.url && (
              <img
                alt={state?.image?.title}
                className={[s.container.mock, s.image.imageLight].join(' ')}
                src={state?.image?.url} />
            )}
            <div className="mx-2">
              <input
                accept="image/*"
                className={[s.button.black, 'w-auto mt-0'].join(' ')}
                id="fileInput"
                type="file"
                onChange={fileChange} />
            </div>
          </div>
          <div
            className={[
              'h-full', s.container.desc_light, s.text.desc_light, s.input.editable,
            ].join(' ')}
            contentEditable={true}
            placeholder="введите текст для поста "
            suppressContentEditableWarning={true}
            onInput={(e: any) => {
              innerRef.current = e?.currentTarget.textContent;
            }}
          >
            {state?.message}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ScreenModal;
