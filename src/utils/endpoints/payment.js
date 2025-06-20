const { defaults } = require('./defaults');

export const payments = {
  createPromoCode: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/adminPanel/stripe-promo-code/add-promo-code',
    },
  },
  createPaymentLink: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/adminPanel/stripe-payment-link/create-payment-link',
    },
  },

  getAllPayments: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/getAllRides',
    },
  },

  addPayment: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/createRide',
    },
  },

  getSinglePayment: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/createRide:id',
    },
  },
  deletePayment: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/createRide:id',
    },
  },
  updatePayment: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/adminPanel/rides/createRide:id',
    },
  },
};
