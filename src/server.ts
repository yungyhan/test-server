import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import type { ListenOptions } from "net";

// Schema definition
export const typeDefs = `
  #graphql
  type Query {
    hello(name: String): String!
  }
`;

export const typeDefs2 = `
  #graphql
  type Query {
    helloxxx(name: String): String!
  }
`;

// Resolver map
export const resolvers = {
  Query: {
    hello: (_, { name }) => `Helloxxxx ${name}!`,
  },
};

// Resolver map
export const resolvers2 = {
  Query: {
    helloxxx: (_, { name }) => `123 ${name}!`,
  },
};

// This function will create a new server Apollo Server instance
export const createApolloServer = async (
  listenOptions: ListenOptions = { port: 4000 }
) => {
  const server = new ApolloServer({
    typeDefs: [typeDefs, typeDefs2],
    resolvers: [resolvers, resolvers2],
  });

  const { url } = await startStandaloneServer(server, {
    listen: listenOptions,
  });

  // return the server instance and the url the server is listening on
  return { server, url };
};

// For simplicity we create our server in this file,
// but in a real app you'd export `createApolloServer` into
// another file and call it elsewhere.
if (process.env.NODE_ENV !== "test") {
  const { url } = await createApolloServer();
  console.log(`🚀 Query endpoint ready at ${url}`);
}
