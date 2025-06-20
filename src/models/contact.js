import { getAllContact, deleteContact } from '@/services/contact';
const Model = {
  namespace: 'contact',
  state: {
    contactList: null,
    singleVehicles: null,
    addedOptionRes: null,
    getSingleOption: null,
  },
  effects: {
    *getAllContact({ payload }, { call, put }) {
      try {
        const res = yield call(getAllContact, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'contactList',
        });
   
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },
    *deleteContact({ payload }, { call }) {
      try {
        const res = yield call(deleteContact, payload);

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
