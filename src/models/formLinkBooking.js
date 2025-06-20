import { getAllBookingForm, getSingleBooking, deleteBooking } from '@/services/formLinkBooking';

const Model = {
  namespace: 'bookingForm',
  state: {
    bookingFormList: null,
  },
  effects: {
    *getAllBookingForm({ payload }, { call, put }) {
      try {
        const res = yield call(getAllBookingForm, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'bookingFormList',
        });
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },

    *getSingleBooking({ payload }, { call }) {
      try {
        const res = yield call(getSingleBooking, payload);

        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },
    *deleteBooking({ payload }, { call }) {
      try {
        const res = yield call(deleteBooking, payload);

        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    //   *createVehicle({ payload }, { call }) {
    //     try {
    //       const res = yield call(createVehicle, payload);
    //       return res;
    //     } catch (error) {
    //       Promise.reject(error);
    //     }
    //   },
    //   *addVehicles({ payload }, { call, put }) {
    //     try {
    //       const res = yield call(addVehicles, payload);
    //       yield put({
    //         type: 'setStates',
    //         payload: res,
    //         key: 'addedVehicleRes',
    //       });
    //       return res;
    //     } catch (err) {
    //       Promise.reject(err);
    //     }
    //   },
    //   *addVehicles2({ payload }, { call }) {
    //     try {
    //       const res = yield call(addVehicles2, payload);
    //       return res;
    //     } catch (err) {
    //       Promise.reject(err);
    //     }
    //   },

    //   *updateVehicle({ payload }, { call }) {
    //     try {
    //       const res = yield call(updateVehicle, payload);

    //       return res;
    //     } catch (err) {
    //       Promise.reject(err);
    //     }
    //   },
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
