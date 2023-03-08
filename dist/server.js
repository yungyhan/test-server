import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolversHome, typeDefsHome } from "./homeModule.js";
import { logPantry } from "./pantryClient.js";
// Schema definition
export const typeDefs = `
  #graphql
  type Query {
    hello(name: String): String!
  }
`;
// Resolver map
export const resolvers = {
    Query: {
        hello: (_, { name }) => {
            logPantry();
            return "hello" + name;
        },
    },
};
// This function will create a new server Apollo Server instance
export const createApolloServer = async (listenOptions = { port: 4000 }) => {
    const server = new ApolloServer({
        typeDefs: [typeDefs, typeDefsHome],
        resolvers: [resolvers, resolversHome],
    });
    const { url } = await startStandaloneServer(server, {
        listen: listenOptions,
    });
    // return the server instance and the url the server is listening on
    return { server, url };
};
