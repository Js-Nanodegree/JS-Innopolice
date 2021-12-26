import 'dotenv/config';
import "regenerator-runtime/runtime";
import { sendMessage } from './index'
require('../../config/firebase')
import * as R from 'ramda'

const adminToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsInR5cGUiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIl0sImlhdCI6MTYzODk2OTMyNn0.sZ-9ogQQclckyIz1njU56FjTEPTvEoCx5HNNdxQ03TQ",
};
const clientToken = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6ZW4uY2FyIiwic3ViIjoiYXV0aCIsImlhdCI6MTYzOTQ2NDI3Mi42MiwiaWQiOjExMCwicm9sZXMiOlsiQ0xJRU5UIl0sInR5cGUiOiJjbGllbnQiLCJtZXRob2QiOiJBVVRIRU5USUNBVEVfQllfQ09ERSIsImV4cCI6MTY0NDY0ODI3Mi42Mn0.BUPYcgCiIrfZk042h6X4oHZ7cBt4NAfRGNfrp4H5nEM",
};


describe('',
  () => {
    test.skip('', async () => {
      const message = await sendMessage({
        message: 'select',
        sharedMessage: { id: '12312312', message: '12312312' },
        idChannel: '123123',
        ctx: adminToken
      })

      expect(R.omit(['createdAt'])(message)).toEqual({
        "appealId": 1508,
        "clientId": 110,
        "idChannel": "132131231",
        "message": "select",
        "read": false,
        "sharedMessage": {
          "id": "12312312",
          "message": "12312312"
        },
        "uuid": "1341324123",
        "workshop_120": true,
        "workspaceType": "APPEAL",
        "write": 24
      })
    })
  })