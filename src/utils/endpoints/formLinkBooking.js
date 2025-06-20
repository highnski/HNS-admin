const { defaults } = require('./defaults');

export const booking = {
  getAllBookingForm: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/formLinkBooking/getLinkForm',
    },
  },

  getSingleBooking: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/formLinkBooking/singleGet/:id',
    },
  },
  deleteBooking: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/formLinkBooking/:id',
    },
  },
  //   getEarningRide: {
  //     v1: {
  //       ...defaults.methods.GET,
  //       ...defaults.versions.v1,
  //       uri: '/adminPanel/rides/earnings',
  //     },
  //   },
};
