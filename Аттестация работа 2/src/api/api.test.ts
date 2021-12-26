import "regenerator-runtime/runtime";
import API from "./index";
import {STATUS_GARAGE} from '../constant'


const adminToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInR5cGUiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTYzODk2OTMyNn0.sZ-9ogQQclckyIz1njU56FjTEPTvEoCx5HNNdxQ03TQ",
};
const clientToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6ZW4uY2FyIiwic3ViIjoiYXV0aCIsImlhdCI6MTYzOTQ2NDI3Mi42MiwiaWQiOjExMCwicm9sZXMiOlsiQ0xJRU5UIl0sInR5cGUiOiJjbGllbnQiLCJtZXRob2QiOiJBVVRIRU5USUNBVEVfQllfQ09ERSIsImV4cCI6MTY0NDY0ODI3Mi42Mn0.BUPYcgCiIrfZk042h6X4oHZ7cBt4NAfRGNfrp4H5nEM",
};

describe("", () => {
  test.skip("CheckClient", async () => {
    const api = await API.CLIENT_CHECKER([], {});
    try {
      expect(api).toEqual(null);
    } catch (e: any) {
      const t = () => {
        throw new TypeError();
      };
      expect(t).toThrow('Error: Error:GRAPHQL');
    }
  });
  test.skip("CheckClient", async () => {
    const api = await API.CLIENT_CHECKER(clientToken);
    expect(api?.typename).toEqual("Client");
    expect(api?.members.length).toEqual(1);
    expect(api?.profileId).toEqual(110);
  });
  test.skip("CheckClient", async () => {
    const api = await API.CLIENT_CHECKER(adminToken);
    expect(api?.typename).toEqual("Admin");
    expect(api?.members.length).toEqual(1);
    expect(api?.profileId).toEqual(24);
  });
  /////////////////// GARAGE SELECT
  test.skip("CheckGarage", async () => {
    const api = await API.WORKSHOP_LIST([], {});
    expect(api?.workshop.length).toEqual(417)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Client", async () => {
    const api = await API.WORKSHOP_LIST({}, clientToken);
    expect(api?.workshop.length).toEqual(299)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Workshop", async () => {
    const api = await API.WORKSHOP_LIST({}, adminToken);
    expect(api?.workshop.length).toEqual(299)
    expect(api?.members.length).toEqual(413)
  });
  /////////////////// GARAGE q
  test.skip("CheckGarage", async () => {
    const api = await API.WORKSHOP_LIST({ q: '12' }, {});
    expect(api?.workshop.length).toEqual(39)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Client", async () => {
    const api = await API.WORKSHOP_LIST({ q: '12' }, clientToken);
    expect(api?.workshop.length).toEqual(39)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Workshop", async () => {
    const api = await API.WORKSHOP_LIST({ q: '12' }, adminToken);
    expect(api?.workshop.length).toEqual(39)
    expect(api?.members.length).toEqual(95)
  });
  /////////////////// GARAGE q
  test.skip("CheckGarage", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.VERIFIED } }, {});
    expect(api?.workshop.length).toEqual(105)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Client", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.VERIFIED } }, clientToken);
    expect(api?.workshop.length).toEqual(99)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Workshop", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.VERIFIED } }, adminToken);
    expect(api?.workshop.length).toEqual(99)
    expect(api?.members.length).toEqual(182)
  });
  /////////////////// GARAGE q
  test.skip("CheckGarage", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.BEING_MODERATED } }, {});
    expect(api?.workshop.length).toEqual(42)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Client", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.BEING_MODERATED } }, clientToken);
    expect(api?.workshop.length).toEqual(36)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Workshop", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.BEING_MODERATED } }, adminToken);
    expect(api?.workshop.length).toEqual(36)
    expect(api?.members.length).toEqual(59)
  });

  /////////////////// GARAGE q
  test.skip("CheckGarage", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.NOT_VERIFIED } }, {});
    expect(api?.workshop.length).toEqual(265)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Client", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.NOT_VERIFIED } }, clientToken);
    expect(api?.workshop.length).toEqual(161)
    expect(api?.members.length).toEqual(0)
  });
  test.skip("CheckGarage Workshop", async () => {
    const api = await API.WORKSHOP_LIST({ status: { eq: STATUS_GARAGE.NOT_VERIFIED } }, adminToken);
    expect(api?.workshop.length).toEqual(161)
    expect(api?.members.length).toEqual(165)
  });
});
