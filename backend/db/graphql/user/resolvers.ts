import {User} from "../../models/User.ts";

export const resolvers = {
	Query: {
		users: async (_p: any, args: any) => {
			const { name, email } = args;
			let filter: Record<string, any> = {};
			if (name) filter.name = new RegExp(name, "i");
			if (email) filter.email = new RegExp(email, "i");
			const users = User.find(filter);
			return users;
		},
		user: async (_p: any, { id }: any) => {
			const user = User.findById(id);
			return user;
		},
	},
	Mutation: {
		createUser: async (_p: any, args: any) => {
			const createdUser = User.create(args.input);
			return createdUser;
		},
	},
};