import {
  addLocation,
  deleteLocation,
  getAllLocation,
  getSingleLocationDetails,
  updateLocation,
} from '@/services/location';

const Model = {
  namespace: 'location',
  state: {
    locationList: null,
    singleVehicles: null,
    addedLocationRes: null,
    singleLocationDetails: null,
    updateLocation: null,
  },
  effects: {
    *getAllLocation({ payload }, { call, put }) {
      try {
        const res = yield call(getAllLocation, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'locationList',
        });
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },
    *addLocation({ payload }, { call }) {
      try {
        const res = yield call(addLocation, payload);
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },

    *getSingleLocationDetails({ payload }, { call, put }) {
      try {
        const res = yield call(getSingleLocationDetails, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'singleLocationDetails',
        });
        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    *deleteLocation({ payload }, { call }) {
      try {
        const res = yield call(deleteLocation, payload);

        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    *updateLocation({ payload }, { call }) {
      try {
        const res = yield call(updateLocation, payload);

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
