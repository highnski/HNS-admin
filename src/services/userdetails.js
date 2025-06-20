import { callApi, hostname } from '@/utils/apiUtils';
import { user } from '@/utils/endpoints/user';

export const getAllUser = ({ query }) => callApi({ uriEndPoint: user.getAllUser.v1, query });

export const getSingleUser = ({ pathParams }) =>
  callApi({ uriEndPoint: location.getSingleUser.v1, pathParams });
