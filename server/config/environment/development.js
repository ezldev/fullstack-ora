'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  // sequelize: {
  //   uri: 'sqlite://',
  //   options: {
  //     logging: false,
  //     storage: 'dev.sqlite',
  //     define: {
  //       timestamps: false
  //     }
  //   }
  // },

  // // Seed database on startup
  // seedDB: true

  db: {
          rms: {
              'connectString': "XE",
              'user': 'neel',
              'password': 'Newpass123',
              'poolMin': 4,
              'poolMax': 30,
              'poolIncrement': 2,
              'poolTimeout': 120
          },
  } 

};
