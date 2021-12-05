import React from 'react';

// import {useSelector} from 'react-redux';
import Api from 'src/api';

import CardRender from './Card';


const Connected = () => {
  const [state, setState] = React.useState<any>({});
  // const uuid = useSelector((state: any) => state?.createSegment?.uuid);

  React.useEffect(() => {
    try {
      Api.getAllPost().then(({data}: any) => setState(data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(state);

  return (
    <>
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
      <CardRender />
    </>
  );
};

export default Connected;
