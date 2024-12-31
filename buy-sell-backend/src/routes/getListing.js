const Boom = require('@hapi/boom');
import { db } from "../database";

export const getListingRoute =  {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (request, h) => {

      const id = request.params.id;
      const { results } = await db.query(
        'SELECT * FROM listings WHERE id =?', [id]
      );
      const listing = results[0];
        if (!listing) throw Boom.notFound(`Listing with id ${id} not found`);
        return listing;
    }
};
