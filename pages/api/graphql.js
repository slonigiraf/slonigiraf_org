import Cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import resolvers from "../../graphql/resolver";
import typeDefs from "../../graphql/typeDefs";

const cors = Cors({
  origin: "https://studio.apollographql.com",
  allowCredentials: true,
});

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});
// // Apollo Server Micro takes care of body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};