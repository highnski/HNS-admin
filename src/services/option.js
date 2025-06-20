import { callApi } from '@/utils/apiUtils';

import { option } from '@/utils/endpoints/option';

export const getAllOption = ({ query }) => callApi({ uriEndPoint: option.getAllOption.v1, query });

// export const getSingleVehicle=({pathParams})=>
// callApi({uriEndPoint:vehicles?.getSingleLocation.v1,pathParams});

// export const createVehicle = ({ body }) =>
//   callApi({ uriEndPoint: vehicles.createVehicle.v1, body });

// export const addVehicles2 = ({ body }) =>
//   callApi({ uriEndPoint: vehicles.addVehicles2.v1, body }).then((res) => {
//     return res;
//   });
export const getSingleOption = ({ pathParams }) =>
  callApi({ uriEndPoint: option.getSingleVehicleOption.v1, pathParams });
// export const deleteVehicle = ({ pathParams }) =>
//   callApi({ uriEndPoint: vehicles.deleteVehicle.v1, pathParams }).then((res) => {
//     return res;
//   });
export const updateVehicleOption = ({ body, pathParams }) =>
  callApi({ uriEndPoint: option.updateVehicleOption.v1, body, pathParams }).then((res) => {
    return res;
  });
export const deleteVehicleOption = ({ pathParams }) =>
  callApi({ uriEndPoint: option.deleteVehicleOption.v1, pathParams }).then((res) => {
    return res;
  });

export const addVehicleOptions = ({ body }) =>
  callApi({ uriEndPoint: option.addVehicleOptions.v1, body }).then((res) => {
    return res;
  });
