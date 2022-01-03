"use strict";

/**
 *  home controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::home.home");

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    console.log(query);

    const entity = await strapi.entityService.findMany("api::home.home", {
      ...query,
      populate: {
        // headerimage: "*",
        content: {
          populate: {
            divisionFilter: {
              fields: ["id"],
            },
            team_filters: {
              fields: ["id"],
            },
            // widget
            team: {
              populate: "*",
            },
          },
        },
        nextGames: {
          populate: "*",
        },
        partner: {
          populate: "*",
        },
      },
    });

    const newsZone = entity.content.find(
      (i) => i.__component === "content.news"
    );

    const selectedDivisionIds = newsZone.divisionFilter.map((e) => e.id);

    const teamsFromDivisions = await strapi.entityService.findMany(
      "api::team.team",
      {
        filter: {
          division: {
            $in: selectedDivisionIds,
          },
        },
      }
    );

    const teamFromDivisionIds = teamsFromDivisions.map((team) => team.id);

    const posts = await strapi.entityService.findMany("api::post.post", {
      where: {
        teams: {
          id: {
            $in: teamFromDivisionIds,
          },
        },
      },
      populate: {
        teams: {
          fields: ["name"],
        },
      },
      orderBy: [{ publishedAt: "desc" }],
      limit: newsZone.post_count,
    });

    newsZone.posts = posts;

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
