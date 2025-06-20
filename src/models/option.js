import {
  addVehicleOptions,
  deleteVehicleOption,
  getAllOption,
  getSingleOption,
  updateVehicleOption,
} from '@/services/option';

const Model = {
  namespace: 'option',
  state: {
    optionList: null,
    singleVehicles: null,
    addedOptionRes: null,
    getSingleOption: null,
  },
  effects: {
    *getAllOption({ payload }, { call, put }) {
      try {
        const res = yield call(getAllOption, payload);
        yield put({
          type: 'setStates',
          payload: res,
          key: 'optionList',
        });
       
        return res;
      } catch (error) {
        Promise.reject(error);
      }
    },

    *getSingleOption({ payload }, { call }) {
      try {
        const res = yield call(getSingleOption, payload);

        return res;
      } catch (error) {
        Promise.reject(error);
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
    *addOption({ payload }, { call }) {
      try {
        const res = yield call(addVehicleOptions, payload);

        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },

    *deleteVehicleOption({ payload }, { call }) {
      try {
        const res = yield call(deleteVehicleOption, payload);

        return res;
      } catch (err) {
        Promise.reject(err);
      }
    },
    *updateVehicleOption({ payload }, { call }) {
      try {
        const res = yield call(updateVehicleOption, payload);

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
