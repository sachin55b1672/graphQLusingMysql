import { GraphQLID, GraphQLInt, GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";



// GET ALL USERS 
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};


// GET USER
export const GETUSER = {
  type: new GraphQLList(UserType),
  args:
  {
    id: { type: GraphQLID }
  },
  resolve(parent: any, args: any) {
    const id = args.id;
    return Users.findByIds(id);
  },
};
