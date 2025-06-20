import { createPaymentLink, createPromoCode, getAllPayments } from '@/services/payment';

const Model = {
  namespace: 'payments',
  state: {
    // analyticsList: null,
  },
  effects: {
    *createPromoCode({ payload }, { call, put }) {
      try {
        const res = yield call(createPromoCode, payload);
        // yield put({
        //   type: 'setStates',
        //   payload: res,
        //   key: 'promo',
        // });
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },
    *createPaymentLink({ payload }, { call, put }) {
      try {
        const res = yield call(createPaymentLink, payload);
        // yield put({
        //   type: 'setStates',
        //   payload: res,
        //   key: 'promo',
        // });
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },

    *getAllPayments({ payload }, { call, put }) {
      try {
        const res = yield call(getAllPayments, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'paymentsList',
        });
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },

    *addPayment({ payload }, { call, post }) {
      try {
        const res = yield call(addPayment, payload);
        yield post({
          type: 'setStates',
          payload: res,
          key: 'addedPaymentRes',
        });
        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },

    *getSinglePaymentDetails({ payload }, { call, put }) {
      try {
        const res = yield call(getSinglePaymentDetails, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'singlePaymentDetails',
        });
        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    *deletePayment({ payload }, { call }) {
      try {
        const res = yield call(deletePayment, payload);

        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    *updatePayment({ payload }, { call }) {
      try {
        const res = yield call(updatePayment, payload);

        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
  },

  reducers: {
    setStates(state, { payload, key }) {
      return {
        ...state,
        [key]: payload,
      };
    },
  },
};
export default Model;
