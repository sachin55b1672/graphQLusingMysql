import { GraphQLID, GraphQLString } from "graphql";
import { CommentType } from "../TypeDefs/comment";
import { MessageType } from "../TypeDefs/Messages";
import { comments } from "../../Entities/comment";


// CREATE COMMENT
export const CREATE_COMMENT = {
  type: CommentType,
  args: {
    name: { type: GraphQLString },
    comment: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, comment } = args;
    await comments.insert({ name, comment });
    const msg = "COMMENT INSERTED";
    console.log(msg);
    return msg;
  },
};



// UPDATE COMMENT
export const UPDATE_COMMENT = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    comment: { type: GraphQLString }

  },
  async resolve(parent: any, args: any) {
    const { id, name, comment } = args;
    const isExist = await comments.findOne({ id: id })
    console.log(isExist);

    if (!isExist) {
      const ERROR = "COMMENT DOES NOT EXIST";
      return ERROR;
    }
    else {
      const updateComment = await comments.update({ id: id }, { name: name, comment: comment });
      const msg = "COMMENT UPDATED";
      console.log(msg);

    }


  },
};

// DELETE COMMENT 

export const DELETE_COMMENTS = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await comments.delete(id);

    return { successful: true, message: "DELETE COMMENT" };
  },
};
