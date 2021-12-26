import "regenerator-runtime/runtime";
import { workspaceSelect } from "./index";
import * as R from "ramda";
import { ENUM_TYPE, iWorkShopInput, iClient } from "../interface";

const adminToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInR5cGUiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTYzODk2OTMyNn0.sZ-9ogQQclckyIz1njU56FjTEPTvEoCx5HNNdxQ03TQ",
};
const clientToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6ZW4uY2FyIiwic3ViIjoiYXV0aCIsImlhdCI6MTYzOTQ2NDI3Mi42MiwiaWQiOjExMCwicm9sZXMiOlsiQ0xJRU5UIl0sInR5cGUiOiJjbGllbnQiLCJtZXRob2QiOiJBVVRIRU5USUNBVEVfQllfQ09ERSIsImV4cCI6MTY0NDY0ODI3Mi42Mn0.BUPYcgCiIrfZk042h6X4oHZ7cBt4NAfRGNfrp4H5nEM",
};

describe("", () => {
  test("Create Appeal Data", async () => {
    const input = {
      where: {},
      workspaceType: ENUM_TYPE.APPEAL,
      client: { id: 110 },
      appeal: 1508,
      workshop: [{ id: 120 }],
      members: [{ id: 123 }],
    };
    const data: any = await workspaceSelect(input, {});
    expect(R.omit(["createdAt", "idChannel"])(data)).toEqual({
      appealId: 1508,
      clientId: 110,
      members: [{ id: 110 }],
      workshop: [
        {
          id: 120,
          address: false,
          name: "Фильтр Москва",
          phone: "+74952593000",
        },
      ],
      workshop_120: true,
      workspaceType: ENUM_TYPE.APPEAL,
    });
  });
  test("Create Appeal Data", async () => {
    const input = {
      where: {},
      workspaceType: ENUM_TYPE.APPEAL,
      client: { id: 110 },
      appeal: 1508,
      workshop: [{ id: 120 }],
      members: [{ id: 123 }],
    };
    const data: any = await workspaceSelect(input, clientToken);
    expect(R.omit(["createdAt", "idChannel"])(data)).toEqual({
      "appealId": 1508,
      "clientId": 110,
      "members": [
        {
          "__typename": "Client",
          "id": 110,
          "name": {
            "first": "Slava",
            "last": "Yakimov",
            "middle": "Mustreets",
          },
          "phone": "+79961049357",
        },
      ],
      "workshop": [
        {
          "address": false,
          "id": 120,
          "name": "Фильтр Москва",
          "phone": "+74952593000",
        },
      ],
      "workshop_120": true,
      "workspaceType": "APPEAL",
    });
  });
  test("Create Admin Data", async () => {
    const input = {
      where: {},
      workspaceType: ENUM_TYPE.ADMIN,
      client: { id: 110 },
      appeal: 1508,
      workshop: [{ id: 120 }],
      members: [{ id: 123 }],
    };
    const data: any = await workspaceSelect(input, {});
    expect(R.omit(["createdAt", "idChannel"])(data)).toEqual({
      clientId: 110,
      admin: true,
      members: [
        {
          id: 110,
        },
      ],
      workspaceType: ENUM_TYPE.ADMIN,
    });
  }),
  test("Create Admin Data", async () => {
    const input = {
      where: {},
      workspaceType: ENUM_TYPE.ADMIN,
      client: { id: 110 },
      appeal: 1508,
      workshop: [{ id: 120 }],
      members: [{ id: 123 }],
    };
    const data: any = await workspaceSelect(input, clientToken);
    expect(R.omit(["createdAt", "idChannel"])(data)).toEqual({
      admin: true,
      clientId: 110,
      members: [
        {
          __typename: "Client",
          id: 110,
          name: {
            first: "Slava",
            last: "Yakimov",
            middle: "Mustreets",
          },
          phone: "+79961049357",
        },
      ],
      workspaceType: "ADMIN",
    });
  }),
  test("Create WorkShop Admin Data", async () => {
    const input = {
      where: {},
      workspaceType: ENUM_TYPE.GARAGE,
      client: { id: 110 },
      appeal: 1508,
      workshop: [{ id: 120 }, { id: 110 }],
      members: [{ id: 123 }],
    };
    const data: any = await workspaceSelect(input, adminToken);
    expect(R.omit(["createdAt", "idChannel"])(data)).toEqual({
      members: [
        {
          id: 221,
          name: {
            first: "Михаил",
            last: "Судаков",
            middle: null,
          },
          phone: "+79267161999",
        },
        {
          id: 282,
          name: {
            first: "Алексей",
            last: "Москва Казачанский",
            middle: null,
          },
          phone: "+79652638330",
        },
        {
          id: 238,
          name: {
            first: "Ирина",
            last: "Алтухова",
            middle: null,
          },
          phone: "+79104901050",
        },
      ],
      workshop: [
        {
          address: false,
          id: 110,
          name: "Аэробус",
          phone: "+79652638330",
        },
        {
          address: false,
          id: 120,
          name: "Фильтр Москва",
          phone: "+74952593000",
        },
      ],
      workshop_110: true,
      workshop_120: true,
      workspaceType: "GARAGE",
    });
  });
  test("Create WorkShop Client Data", async () => {
    const input = {
      where: {},
      workspaceType: ENUM_TYPE.GARAGE,
      client: { id: 110 },
      appeal: 1508,
      workshop: [{ id: 120 }, { id: 143 }],
      members: [{ id: 123 }],
    };
    const data: any = await workspaceSelect(input, clientToken);
    expect(R.omit(["createdAt", "idChannel"])(data)).toEqual({
      workshop: [
        {
          address: false,
          id: 120,
          name: "Фильтр Москва",
          phone: "+74952593000",
        },
      ],
      workshop_120: true,
      workshop_143: true,
      workspaceType: "GARAGE",
    });
  });
});
