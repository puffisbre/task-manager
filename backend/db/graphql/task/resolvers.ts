import {Task} from "../../models/Task.ts";
import {User} from "../../models/User.ts";

export const resolvers = {
	Query: {
		tasks: async (_p: any, args: any) => {
			const tasks = Task.find({});
			return tasks;
		},
		task: async (_p:any, { id }: any) => {
			const task = Task.findById(id);
			return task;
		},
	},
	Task: {
		user: async (doc: any) => {
			return User.findById(doc.userID);
		},
	},
	Mutation: {
		createTask: async (_p: any, args: any) => {
			const createdTask = Task.create(args.input);
			return createdTask;
		},
	}
};
