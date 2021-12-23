import { request, GraphQLClient } from "graphql-request";
import { GARAGES_ZENCAR } from "./schema";
import * as R from "ramda";
const endpoint = process.env.ZENCAR||''


interface iGarageReq {
  where: any;
  paginate: any;
}

interface iClientName {
  first: string;
  last: string;
  middle: string;
}

interface iMember {
  id: number;
  name: iClientName;
  phone: string;
}

interface iWorkShop {
  id: any;
  name: string;
  phone: string;
  address: string;
}

export default {
  
};
