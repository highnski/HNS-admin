import { callApi } from '@/utils/apiUtils';
import { booking } from '@/utils/endpoints/formLinkBooking';

export const getAllBookingForm = ({ query }) =>
  callApi({ uriEndPoint: booking.getAllBookingForm.v1, query });

export const getSingleBooking = ({ pathParams }) =>
  callApi({ uriEndPoint: booking?.getSingleBooking.v1, pathParams });

export const deleteBooking = ({ body, query, pathParams }) =>
  callApi({ uriEndPoint: booking.deleteBooking.v1, body, query, pathParams });

// export const createVehicle = ({ body }) =>
//   callApi({ uriEndPoint: vehicles.createVehicle.v1, body });
// export const addVehicles = ({ body }) =>
//   callApi({ uriEndPoint: vehicles.addVehicles.v1, body }).then((res) => {
//     return res;
//   });
// export const addVehicles2 = ({ body }) =>
//   callApi({ uriEndPoint: vehicles.addVehicles2.v1, body }).then((res) => {
//     return res;
//   });

// export const deleteVehicle = ({ pathParams }) =>
//   callApi({ uriEndPoint: vehicles.deleteVehicle.v1, pathParams }).then((res) => {
//     return res;
//   });
// export const updateVehicle = ({ body, pathParams }) =>
//   callApi({ uriEndPoint: vehicles.updateVehicle.v1, body, pathParams }).then((res) => {
//     return res;
//   });
