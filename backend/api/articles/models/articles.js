'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 const cp = require('child_process')

 async function rebuildGatsby() {
   const cmd = `cd ../frontend && gatsby build && cd ../backend`
   cp.exec( cmd, (err, stdout, stderr) => stdout && console.log( `Rebuild has been ended` ) )
 }

 module.exports = {
   lifecycles: {
     afterCreate: () => rebuildGatsby(),
     afterUpdate: () => rebuildGatsby(),
     afterDelete: () => rebuildGatsby(),
   }
 }
