import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import { resolvers } from './resolver'
import { initializeApp } from "firebase/app";

const app = express();

initializeApp({
  apiKey:process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket:process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
});


let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection:true,
    context:(req:any,res:any)=>({req,res})
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.get("/rest", function (req, res) {
  res.json({ data: "api working" });
});

app.listen({ port: process.env.PORT,host:process.env.HOST}, () => {
  console.log(`Apollo Server on http://${process.env.HOST}:${process.env.PORT}/graphql`);
});