'use strict';

/**
 * chronik service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chronik.chronik');
