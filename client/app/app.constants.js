'use strict';

import angular from 'angular';

export default angular.module('ngfApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
