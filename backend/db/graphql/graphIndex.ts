import { typeDefs as userTypeDefs } from "./user/typeDefs.js";
import { resolvers as userResolvers } from "./user/resolvers.js";
import { typeDefs as taskTypeDefs } from "./task/typeDefs.js";
import { resolvers as taskResolvers } from "./task/resolvers.js";

export const typeDefs = [userTypeDefs, taskTypeDefs];
export const resolvers = [userResolvers, taskResolvers];