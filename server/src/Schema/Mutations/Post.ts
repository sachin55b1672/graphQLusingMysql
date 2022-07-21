import { GraphQLID, GraphQLString } from "graphql";
import { PostType } from "../TypeDefs/Post";
import { MessageType } from "../TypeDefs/Messages";
import { posts } from "../../Entities/Post";


// CREATE USER
export const CREATE_POST = {
  type: PostType,
  args: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { title, description, category } = args;
    await posts.insert({ title, description, category });
    const msg = "POST INSERTED";
    console.log(msg);

    return msg;
  },
};



// UPDATE POST
export const UPDATE_POST = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, title, description, category } = args;
    const isExist = await posts.findOne({ id: id })
    console.log(isExist);

    if (!isExist) {
      const ERROR = "POST DOES NOT EXIST";
      return ERROR;
    }
    else {
      const updatePOSTS = await posts.update({ id: id }, { title: title, description: description, category: category });
      const msg = "POST UPDATED";
      console.log(msg);

    }


  },
};

// DELETE POST 

export const DELETE_POST = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await posts.delete(id);

    return { successful: true, message: "DELETE POST" };
  },
};
