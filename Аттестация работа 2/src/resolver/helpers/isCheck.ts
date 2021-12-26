import * as R from "ramda";
import * as iType from "../interface";

export const isAPPEAL = [
  R.propEq('workspaceType', iType.ENUM_TYPE.APPEAL),
  R.hasPath(['appeal']),
  R.hasPath(['client', 'id']),
  R.pipe(R.path(['workshop']), R.isEmpty, R.not),
  R.pipe(R.path(['members']), R.isEmpty, R.not),
];
export const isADMIN = [
  R.propEq('workspaceType', iType.ENUM_TYPE.ADMIN),
  R.hasPath(['client', 'id']),
  R.pipe(R.path(['members']), R.isEmpty, R.not),
];
export const isGARAGE = [
  R.propEq('workspaceType', iType.ENUM_TYPE.GARAGE),
  R.pipe(R.path(['workshop']), R.isEmpty, R.not),
  R.pipe(R.path(['members']), R.isEmpty, R.not),
];
export const isCLIENT = [
  R.propEq('workspaceType', iType.ENUM_TYPE.CLIENT),
  R.pipe(R.path(['workshop']), R.isEmpty, R.not),
  R.pipe(R.path(['members']), R.isEmpty, R.not),
  R.hasPath(['client', 'id']),
];
