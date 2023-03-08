import { getHome } from "./pantryClient.js";

export const typeDefsHome = `
  type Query {
    home: Home!
  }

  type Home {
    greeting: String!
    welcome: String!
  }
`;

export const resolversHome = {
  Query: {
    home: async (_: any, { name }: { name: string }) => {
      return await getHome();
    },
  },
};
