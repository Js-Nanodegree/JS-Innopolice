export const enum ENUM_TYPE {
  ADMIN = "ADMIN",
  GARAGE = "GARAGE",
  APPEAL = "APPEAL",
  CLIENT = "CLIENT",
};
export interface iClientName {
  first?: String;
  last?: String;
  middle?: String;
}
export interface iWorkShopInput {
  id: number;
}
export interface iClient {
  id: number;
  phone?: String;
  name?: iClientName;
}
export interface iMessage {
  appeal?: number;
  workshop?: [iWorkShopInput];
  workspaceType: ENUM_TYPE;
  client?: iClient;
  workShopInput?: any;
  members?: any;
  custom?: string;
}
export interface iInput {
  input: iClientEntry
}

export interface iClientEntry extends iMessage {
  // [x: string]: any;
  // appealId: any;
  idChannel: string
  message: string
  sharedMessage?: {
    id?: string,
    message?: string
  }
}