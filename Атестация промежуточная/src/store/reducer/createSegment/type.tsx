/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
export enum ActionType {
  CREATE_SEGMENT_NAME = 'CREATE_SEGMENT_NAME',
  DESELECT_BRAND_ITEM = 'DESELECT_BRAND_ITEM',
  CREATE_MAGAZINE_NAME = 'CREATE_MAGAZINE_NAME',
  DESELECT_MAGAZINE_ITEM = 'DESELECT_MAGAZINE_ITEM',
  SELECT_BRAND_ITEM = 'SELECT_BRAND_ITEM',
  CREATE_SEGMENT_COAST = 'CREATE_SEGMENT_COAST',
  CREATE_SEGMENT_INFERNAL = 'CREATE_SEGMENT_INFERNAL',
  UPDATE_CONFIG_FORM_LIST='UPDATE_CONFIG_FORM_LIST',
  UPDATE_SEGMENT_FORM_PERIOD='UPDATE_SEGMENT_FORM_PERIOD',
}

export interface iAdventure {
  name: string;
  items: string[]
}

export interface State {
  adventure: iAdventure[],
  brand?: string[],
  coast: string,
  magazine?: string[],
  name: string,
  period: string,
  segment?: string[]
}

interface IChangeName {
  name: string
}

interface IChangeCoast {
  coast: string
}

interface IChangeBrand {
  brand: string[]
}
interface IChangeInfernal {
  infernal: string
}

interface IChangeMagazine {
  magazine: string[]
}

interface IChangePeriod {
  period: string
}


interface actionChangeName {
  type: ActionType.CREATE_SEGMENT_NAME,
  payload: IChangeName
}

interface actionDeselectBrand {
  type: ActionType.DESELECT_BRAND_ITEM,
  payload: IChangeBrand
}

interface actionSelectBrand {
  type: ActionType.SELECT_BRAND_ITEM,
  payload: IChangeBrand
}

interface actionSelectCoast {
  type: ActionType.CREATE_SEGMENT_COAST,
  payload: IChangeCoast
}

interface actionSelectInfernal {
  type: ActionType.CREATE_SEGMENT_INFERNAL,
  payload: IChangeInfernal
}

interface deActionSelectMagazine {
  type: ActionType.DESELECT_MAGAZINE_ITEM,
  payload: IChangeMagazine
}

interface actionSelectMagazine {
  type: ActionType.CREATE_MAGAZINE_NAME,
  payload: IChangeMagazine
}

interface actionFormConfig {
  type: ActionType.CREATE_MAGAZINE_NAME,
  payload: any
}

interface actionSelectPeriod {
  type: ActionType.UPDATE_SEGMENT_FORM_PERIOD,
  payload: IChangePeriod
}


export type Action = actionSelectPeriod| actionFormConfig| actionChangeName | actionDeselectBrand | actionSelectBrand | actionSelectCoast | actionSelectInfernal | actionSelectMagazine | actionSelectMagazine | deActionSelectMagazine;
