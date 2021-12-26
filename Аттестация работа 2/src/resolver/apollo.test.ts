import "regenerator-runtime/runtime";
import { ENUM_TYPE } from "./interface";
import modifySelect from "./helpers/modifySelect";

const input = {
  workspaceType: ENUM_TYPE.APPEAL,
  client: {
    uuid: {
      id: "2341234123",
      name: { first: "das", last: "asdafa" },
      phone: "2341234",
    },
  },
  appeal: 1508,
  workshop: [{ id: 120 }],
};
const adminToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInR5cGUiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTYzODk2OTMyNn0.sZ-9ogQQclckyIz1njU56FjTEPTvEoCx5HNNdxQ03TQ",
};
const clientToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6ZW4uY2FyIiwic3ViIjoiYXV0aCIsImlhdCI6MTYzOTQ2NDI3Mi42MiwiaWQiOjExMCwicm9sZXMiOlsiQ0xJRU5UIl0sInR5cGUiOiJjbGllbnQiLCJtZXRob2QiOiJBVVRIRU5USUNBVEVfQllfQ09ERSIsImV4cCI6MTY0NDY0ODI3Mi42Mn0.BUPYcgCiIrfZk042h6X4oHZ7cBt4NAfRGNfrp4H5nEM",
};

describe("", () => {
  test("", async () => {
    const inputSelect = await modifySelect(input, adminToken);
    expect(inputSelect).toEqual({
      appeal: 1508,
      client_24: true,
      client_2341234123: true,
      members: [
        {
          id: "2341234123",
          name: {
            first: "das",
            last: "asdafa",
          },
          phone: "2341234",
        },
        {
          __typename: "Admin",
          id: 24,
          name: {
            first: "Родион",
            last: "Голованов",
            middle: "",
          },
          phone: "+79991552206",
        },
      ],
      workshop: [
        {
          id: 120,
        },
      ],
      workspaceType: "APPEAL",
    });
  });
  test("", async () => {
    const inputSelect = await modifySelect(input, {});
    expect(inputSelect).toEqual({
      "appeal": 1508,
      "client_2341234123": true,
      "members": [
        {
          "id": "2341234123",
          "name": {
            "first": "das",
            "last": "asdafa",
          },
          "phone": "2341234",
        },
      ],
      "workshop": [
        {
          "id": 120,
        },
      ],
      "workspaceType": "APPEAL",
    });
  });
});
