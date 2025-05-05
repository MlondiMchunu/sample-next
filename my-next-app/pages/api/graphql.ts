import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

//@ts-ignore
const server = new ApolloServer({
    resolvers,
    typeDefs
});

const handler = startServerAndCreateNextHandler(server);