const { defaults } = require('./defaults');

export const user = {
  getAllUser: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/getAllRides',
    },
  },

  getSingleUser: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/getSingleRideDetails/:id',
    },
  },
  deleteRide: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/:id',
    },
  },
  getEarningRide: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/earnings',
    },
  },
};
