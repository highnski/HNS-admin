import { getAllUser, getSingleUser, deleteRide, getEarningRide } from '@/services/user';

const Model = {
  namespace: 'userDetails',
  state: {},
  effects: {
    *getAllUserDetails({ payload }, { call, put }) {
      try {
        const res = yield call(getAllUser, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'userList',
        });
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },
    *getSingleUser({ payload }, { call, put }) {
      try {
        const res = yield call(getSingleUser, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'singleUser',
        });
        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    *deleteRide({ payload }, { call, put }) {
      try {
        const res = yield call(deleteRide, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'singleUser',
        });
        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    *getEarningRide({ payload }, { call, put }) {
      try {
        const res = yield call(getEarningRide, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'List',
        });
        return res;
      } catch (error) {
        Promise.reject(error);
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
