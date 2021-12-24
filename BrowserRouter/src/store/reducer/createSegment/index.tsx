const SET_CURRENT_USER_SELECT = 'SET_CURRENT_USER_SELECT';

export const selectProfileUser = (uuid: string) => ({
  'payload': uuid,
  'type': SET_CURRENT_USER_SELECT,
});

const initial = {'uudi': ''};

export const createSegment = (state = initial, action: any) => {
  switch (action.type) {
    case SET_CURRENT_USER_SELECT:
      return {'uuid': action.payload};
    default:
      return state;
  }
};

