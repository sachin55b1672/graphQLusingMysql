import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
  }),
});