/* eslint-disable import/namespace */
import React from 'react';

import moment from 'moment';

import {iTodoScreen} from '../connected';
import {Container} from '../Style/Container';

export const Screen = ({state, onDelete}: iTodoScreen) => {
  if (state.length == 0) {
    return <div />;
  }

  const bodyTable = state.map((x, key) => (
    <div key={key}>
      <div className="body_form" >
        <div className="body_value">
          <div className="body_date">{moment(x.date).format('DD MMMM YYYY')}</div>
          <div className="form_input__block">
          <div className="body_message">
            <div className="body_title">{x.message || 'Empty header'}</div>
            <div className="body_description">
              {x?.messageDesc || 'Empty description'}
            </div>
          </div>
          <div className="body_status">
          <button onClick={() => onDelete(x, key)}>
            REMOVE
          </button>
          </div>
        </div>
        </div>
        {x?.image?.data?.display_url ? <img
        alt={x?.image?.data?.title}
        height="255"
        src={x?.image?.data?.display_url}
        width={'100%'}
      />:<div/>}
      </div>

    </div>
  ));

  return (
    <Container>
      <React.Suspense fallback={<div />}>{bodyTable}</React.Suspense>
    </Container>
  );
};
