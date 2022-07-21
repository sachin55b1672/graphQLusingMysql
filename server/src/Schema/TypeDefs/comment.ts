import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    comment: { type: GraphQLString },

  }),
});