import { userSharedProperty } from "@/repository/models/user/user_shared_property ";
import { InferInsertModel } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const UsersViewModel = pgTable('users', {
    ...userSharedProperty,
    lastName: varchar('lastName'),
});

export type UsersViewModelInterface = InferInsertModel<typeof UsersViewModel>;