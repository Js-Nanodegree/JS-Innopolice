import React from 'react';

import {Modal} from 'antd';
import s from 'src/style';
import text from 'src/text';

const ScreenModal = ({
  fileChange, isModalVisible, handleOk, handleCancel, state, innerRef, error,
}: any) => {
  return (
    <Modal
      title={text.WritePost}
      visible={isModalVisible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <div className={['scroll', 'h-full', 'flex-col'].join(' ')}>
          <div className={['hover:bg-white', s.render.header].join(' ')}>
            <img className={s.image.logo}></img>
            <div className={s.render.header_name}>
              <span className={s.text.nameProfile}>{state?.profile?.name}</span>
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
               {error.message && (
            <div>{error.message}</div>
          )}
            <div className="px-2 h-full">
              <input
                accept="image/*"
                className={[s.button.black, 'w-auto mt-0'].join(' ')}
                id="fileInput"
                type="file"
                onChange={fileChange} />
            <div
              className={[
                'h-auto', , s.container.desc_light, s.text.desc_light, s.input.editable,
              ].join(' ')}
              contentEditable={true}
              placeholder={text.postEdit}
              suppressContentEditableWarning={true}
              onInput={(e: any) => {
                innerRef.current = e?.currentTarget.textContent;
              }}
            >
              {state?.message}
            </div>
            </div>
          </div>
        </div>
    </Modal>
  );
};

export default ScreenModal;
