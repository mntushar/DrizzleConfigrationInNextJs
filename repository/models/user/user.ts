import { pgTable } from "drizzle-orm/pg-core";
import { userSharedProperty } from "./user_shared_property ";

export const Users = pgTable('users', {
    ...userSharedProperty,
});

