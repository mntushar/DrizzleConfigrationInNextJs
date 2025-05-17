import { integer, varchar } from 'drizzle-orm/pg-core';

export const userSharedProperty = {
  id: integer('id'),
  first_name: varchar('first_name'),
};