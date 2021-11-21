import {ActionType} from './type';

export const createSegmentName = (name: string) => ({
  'payload': {name},
  'type': ActionType.CREATE_SEGMENT_NAME,
});

export const deselectBrandItem = (item: string[]) => ({
  'payload': {'brand': item},
  'type': ActionType.DESELECT_BRAND_ITEM,
});

export const selectBrandItem = (item: string[]) => ({
  'payload': {'brand': item},
  'type': ActionType.SELECT_BRAND_ITEM,
});

export const deselectMagazineItem = (item: string[]) => ({
  'payload': {'magazine': item},
  'type': ActionType.DESELECT_MAGAZINE_ITEM,
});

export const selectMagazineItem = (item: string[]) => ({
  'payload': {'magazine': item},
  'type': ActionType.CREATE_MAGAZINE_NAME,
});

export const createSegmentCoast=(item:string)=>({
  'payload': {'coast': item},
  'type': ActionType.CREATE_SEGMENT_COAST,
});

export const createSegmentInfernal=(item:string)=>({
  'payload': {'infernal': item},
  'type': ActionType.CREATE_SEGMENT_INFERNAL,
});

export const updateConfigValue=(payload:any)=>({
  payload,
  'type': ActionType.UPDATE_CONFIG_FORM_LIST,
});


export const createSegmentPeriod=(payload:any)=>({
  'payload': {'period': payload},
  'type': ActionType.UPDATE_SEGMENT_FORM_PERIOD,
});
