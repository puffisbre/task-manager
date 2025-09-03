export const typeDefs = /* GraphQL */ `
	type User {
		id: ID!
		name: String!
	    email: String!
		tasks: [String]
	}

	type Query {
		users(name: String, email: String): [User!]!
		user(id: ID!): User
	}

	input CreateUserInput {
		name: String!
	    email: String!
		tasks: [String]
	}

	type Mutation {
		createUser(input: CreateUserInput!): User!
	}
`;
