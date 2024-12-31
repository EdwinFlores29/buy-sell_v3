import { v4 as uuid } from 'uuid';
import { db } from '../database';
export const createNewListingRoute = {
  method: 'POST',
  path: '/api/listings',
  handler: async (request, h) => {
    const id = uuid();
    const userId ='12345';
    const views = 0;
    const { name='', description='', price=0 } = request.payload;
    await db.query(
      'INSERT INTO listings (id, name, description, price, user_id, views) VALUES (?, ?, ?, ?, ?, ?)',
      [id, name, description, price, userId, views]
    );
    return { id, name, description, price, user_id: userId, views };
  }
}
