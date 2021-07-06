'use strict'

const { sanitizeEntity } = require('strapi-utils')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async createDraft( ctx ) {
    const locationData = { ...ctx.request.body, published_at:null }

    let entity

    try {
      entity = await strapi.services.locations.create( locationData )
    } catch (err) {
      switch (err.message) {
        case `Duplicate entry`: return { code:11, error:`Name is not unique` }
        default: return { code:10, error:`Unknown error` }
      }
    }

    return sanitizeEntity( entity, { model:strapi.models.locations } )
  }
};
