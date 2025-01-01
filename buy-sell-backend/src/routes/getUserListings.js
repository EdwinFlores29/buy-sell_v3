import { db } from '../database';
import * as admin from 'firebase-admin';
const Boom = require('@hapi/boom');
export const getUserListingsRoute = {
  method: 'GET',
  path: '/api/users/{userId}/listings',
  handler: async (request, h) => {
    const token = request.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = request.params.userId;
    if (user.user_id !== userId) throw Boom.unauthorized('User can only their own listings');
    const { results } = await db.query(
      'SELECT * FROM listings WHERE user_id =?', [userId]
    );
    return results;
  }
}
