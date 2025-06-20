import { callApi } from '@/utils/apiUtils';
import { payments } from '@/utils/endpoints/payment';

export const createPromoCode = ({ body }) =>
  callApi({ uriEndPoint: payments.createPromoCode.v1, body });

export const createPaymentLink = ({ body }) =>
  callApi({ uriEndPoint: payments.createPaymentLink.v1, body });

export const getAllPayments = ({ query }) =>
  callApi({ uriEndPoint: payments.getAllPayments.v1, query });

export const addPayment = ({ body }) =>
  callApi({ uriEndPoint: payments.addPayment.v1, body }).then((res) => {
    return res;
  });

export const getSinglePaymentDetails = ({ pathParams }) =>
  callApi({ uriEndPoint: payments.getSinglePayment.v1, pathParams });
export const deletePayment = ({ pathParams }) =>
  callApi({ uriEndPoint: payments.deletePayment.v1, pathParams }).then((res) => {
    return res;
  });
export const updatePayment = ({ body, pathParams }) =>
  callApi({ uriEndPoint: payments.updatePayment.v1, body, pathParams }).then((res) => {
    return res;
  });
