import { GraphQLID, GraphQLList } from "graphql";
import { posts } from "../../Entities/Post";
import { PostType } from "../TypeDefs/Post";


// GET ALL POSTS 
export const getAllPOST = {
  type: new GraphQLList(PostType),
  resolve() {
    return posts.find();
  },
};


// GET POST

export const GETPOST = {
  type: new GraphQLList(PostType),
  args:
  {
    id: { type: GraphQLID }
  },
  resolve(parent: any, args: any) {
    const id = args.id;
    return posts.findByIds(id);
  },
};
