const { defaults } = require('./defaults');

export const location = {
  getAllLocation: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/adminPanel/location',
    },
  },
  // createLocation: {
  //   v1: {
  //     ...defaults.methods.POST,
  //     ...defaults.versions.v1,
  //     uri: '/adminPanel/chauffeurs/getAllChauffeurs',
  //   },
  // },
  addLocation: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/adminPanel/location',
    },
  },

  getSingleLocation: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/adminPanel/location/:id',
    },
  },
  deleteLocation: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/adminPanel/location/:id',
    },
  },
  updateLocation: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/adminPanel/location/:id',
    },
  },
};
