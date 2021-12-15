import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import Api from 'src/api';
import {selectProfileUser} from 'src/store/reducer/createSegment';
import {rejectLocalStorage} from 'src/store/reducer/token';

import {Screen} from './Screen';

const HeaderBlock = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState<any>({});
  const auth = useSelector((state: any) => state?.token?.token || null);

  React.useLayoutEffect(() => {
    if (auth) {
      try {
        Api.getCurrentUser(auth).then(({data}: any) =>
          setState(data?.[0] || {}),
        );
      } catch (e) {
        console.log(e);
      }
    }
  }, [auth]);

  return (
    <Screen
      auth={auth}
      setProfile={() => dispatch(selectProfileUser(state?.uuid))}
      onReject={() => dispatch(rejectLocalStorage())}
    />
  );
};

export default HeaderBlock;


