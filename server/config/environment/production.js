'use strict';
/*eslint no-process-env:0*/

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP
    || process.env.ip
    || undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT
    || process.env.PORT
    || 8080,

  //   db: {
  //         rms: {
  //             'connectString': process.env.DB_RMS_NAME,
  //             'user': process.env.DB_RMS_USER,
  //             'password': process.env.DB_RMS_PASS,
  //             'poolMin': 4,
  //             'poolMax': 30,
  //             'poolIncrement': 2,
  //             'poolTimeout': 120
  //         },
  // } 
};
