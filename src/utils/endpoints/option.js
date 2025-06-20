const { defaults } = require('./defaults');

export const option = {
  getAllOption: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/vehicleOption/',
    },
  },
  addVehicleOptions: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/vehicleOption/',
    },
  },
  deleteVehicleOption: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/vehicleOption/:id',
    },
  },
  getSingleVehicleOption: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/vehicleOption/singleGet/:id',
    },
  },
  updateVehicleOption: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/vehicleOption/:id',
    },
  },
};
