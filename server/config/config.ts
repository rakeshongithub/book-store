/* global process */
/**
 * @description app configs
 */

// to get the values from .env
if(typeof(process.env.NODE_ENV) === 'undefined' || process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

export const config = {
    port: process.env.PORT || 3001,
    loglevel: 'info',
    env: process.env.NODE_ENV || 'development',
}
