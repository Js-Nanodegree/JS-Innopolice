import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import { resolvers } from './resolver'
import cors from 'cors';
const app = express();
require('./config/firebase')
app.use(cors());

let apolloServer = null;

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: (req: any, res: any) => ({ req, res })
  });
  await apolloServer.start()
  apolloServer.applyMiddleware({ app });
}

startServer()

app.get("/", function (req, res) {
  res.json({ data: "api working" });
});

app.listen({ port: process.env.PORT, host: process.env.HOST }, () => {
  console.log(`Apollo Server on http://${process.env.HOST}:${process.env.PORT}/graphql`);
});

