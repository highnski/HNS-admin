import { callApi } from '@/utils/apiUtils';
import { location } from '@/utils/endpoints/location';

export const getAllLocation = ({ query }) =>
  callApi({ uriEndPoint: location.getAllLocation.v1, query });

export const createLocation = ({ body }) =>
  callApi({ uriEndPoint: location.createLocation.v1, body });
export const addLocation = ({ body }) =>
  callApi({ uriEndPoint: location.addLocation.v1, body }).then((res) => {
    return res;
  });

export const getSingleLocationDetails = ({ pathParams }) =>
  callApi({ uriEndPoint: location.getSingleLocation.v1, pathParams });
export const deleteLocation = ({ pathParams }) =>
  callApi({ uriEndPoint: location.deleteLocation.v1, pathParams }).then((res) => {
    return res;
  });
export const updateLocation = ({ body, pathParams }) =>
  callApi({ uriEndPoint: location.updateLocation.v1, body, pathParams }).then((res) => {
    return res;
  });
