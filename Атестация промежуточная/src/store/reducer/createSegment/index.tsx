/* eslint-disable import/namespace */
import {ActionType, Action, State} from './type';

const initialState = {
  'adventure': [],
  'brand': [],
  'coast': '',
  'magazine': [],
  'name': '',
  'period': '',
  'segment': [],
};

export const createSegment = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.CREATE_SEGMENT_NAME:
      return {...state, ...action.payload};
    case ActionType.DESELECT_BRAND_ITEM:
      return {...state, ...action.payload};
    case ActionType.SELECT_BRAND_ITEM:
      return {...state, ...action.payload};
    case ActionType.CREATE_SEGMENT_COAST:
      return {...state, ...action.payload};
    case ActionType.CREATE_SEGMENT_INFERNAL:
      return {...state, ...action.payload};
    case ActionType.CREATE_MAGAZINE_NAME:
      return {...state, ...action.payload};
    case ActionType.DESELECT_MAGAZINE_ITEM:
      return {...state, ...action.payload};
    case ActionType.UPDATE_SEGMENT_FORM_PERIOD:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

