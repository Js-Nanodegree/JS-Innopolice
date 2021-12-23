import React from 'react';

// import {useSelector} from 'react-redux';
import Api from 'src/api';

import CardRender from './Card';

const Connected = ({update}: any) => {
  const [state, setState] = React.useState<any>([]);

  React.useEffect(() => {
    try {
      Api.getAllPost().then(({data}: any) => setState(data.reverse()));
    } catch (e) {
      console.log(e);
    }
  }, [update]);


  return (
    <>
      {state.map((x: any, key: number) => (
        <div key={key}>
          <CardRender {...x} />
        </div>
      ))}
    </>
  );
};

export default Connected;
