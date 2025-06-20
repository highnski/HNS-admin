const { defaults } = require('./defaults');
export const contact = {
  getAllContact: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/contacts/',
    },
  },
  deleteContact: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/contacts/:id',
    },
  },
};
