export const typeDefs = /* GraphQL */ `
enum TaskStatus { TODO IN_PROGRESS DONE }

type User {
  id: ID!
  name: String!
  email: String!
}

type Task {
  id: ID!
  taskName: String!
  status: TaskStatus!
  userID: ID!
  user: User!
  description: String!
}

type Query {
  tasks(taskName: String, status: TaskStatus, description: String): [Task!]!
  task(id: ID!): Task
}

input CreateTaskInput {
  taskName: String!
  description: String!
  userID: ID!
  status: TaskStatus = TODO
}

type Mutation {
  createTask(input: CreateTaskInput!): Task!
}

`;