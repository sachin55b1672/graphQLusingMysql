import { GraphQLID, GraphQLList } from "graphql";
import { comments } from "../../Entities/comment";
import { CommentType } from "../TypeDefs/comment";


// GET ALL COMMENTS 
export const GETALLCOMMENTS = {
  type: new GraphQLList(CommentType),
  resolve() {
    return comments.find();
  },
};


// GET COMMENTS

export const GETCOMMENT = {
  type: new GraphQLList(CommentType),
  args:
  {
    id: { type: GraphQLID }
  },
  resolve(parent: any, args: any) {
    const id = args.id;
    return comments.findByIds(id);
  },
};
