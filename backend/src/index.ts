import express from "express";
import dotenv from "dotenv";

import {typeDefs} from '../db/graphql/graphIndex.ts';
import {resolvers} from '../db/graphql/graphIndex.ts';

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

import { connectDB } from "../db/DBconnection.ts";
import userRouter from './routes/userRoutes.ts';
import taskRouter from './routes/taskRoutes.ts'

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userRouter)
app.use("/tasks", taskRouter)

const apollo = new ApolloServer({
	typeDefs: typeDefs as any,
	resolvers: resolvers as any,
});
await apollo.start();

app.use(
	"/graphql",
	expressMiddleware(apollo, {
		context: async () => ({}),
	})
);

const PORT = process.env.PORT || 4000;

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log("Rest is running on port 4000");
		});
	})
	.catch(console.error);