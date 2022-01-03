"use strict";

/**
 *  main-menu controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

/* function populateAttribute({ components }) {
  if (components) {
    const populate = components.reduce((currentValue, current) => {
      return { ...currentValue, [current.split(".").pop()]: { populate: "*" } };
    }, {});
    return { populate };
  }
  return { populate: "*" };
}

const getPopulateFromSchema = function (schema) {
  return Object.keys(schema.attributes).reduce((currentValue, current) => {
    const attribute = schema.attributes[current];
    if (!["dynamiczone", "component"].includes(attribute.type)) {
      return currentValue;
    }
    return {
      ...currentValue,
      [current]: populateAttribute(attribute),
    };
  }, {});
};

const schema = require("../content-types/main-menu/schema.json"); */

module.exports = createCoreController(
  "api::main-menu.main-menu",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;
      const entity = await strapi.entityService.findMany(
        "api::main-menu.main-menu",
        {
          ...query,
          populate: {
            entries: {
              populate: {
                page: {
                  fields: ["title", "slug"],
                },
                teams: true,
                entries: {
                  populate: {
                    page: {
                      fields: ["title", "slug"],
                    },
                  },
                },
              },
            },
          },
        }
      );
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
