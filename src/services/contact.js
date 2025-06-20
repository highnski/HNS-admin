import { callApi } from '@/utils/apiUtils';
import { contact } from '@/utils/endpoints/contact';
export const getAllContact = ({ query }) =>
  callApi({ uriEndPoint: contact.getAllContact.v1, query });

export const deleteContact = ({ pathParams }) =>
  callApi({ uriEndPoint: contact.deleteContact.v1, pathParams }).then((res) => {
    return res;
  });
