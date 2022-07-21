import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/Users";

// CREATE USER
export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({ name, username, password });
    const msg = "DATA INSERTED";
    return msg;
  },
};

// login user
export const LOGIN_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, username, password } = args;
    const isExist = await Users.findOne({ username: username });
    console.log(isExist);
    if (!isExist) {
      throw new Error('user does not exist')
    }
    if (args.password == isExist.password) {
      console.log('user logged in successfully');
    }
  }
}


// UPDATE PASSWORD
export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
      username: { type: GraphQLString },
      oldPassword: { type: GraphQLString },
      newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
      const { username, oldPassword, newPassword } = args;
      const user = await Users.findOne({ username: username });

      if (!user) {
        throw new Error("USERNAME DOESNT EXIST");
      }
      const userPassword = user?.password;

      if (oldPassword === userPassword) {
        await Users.update({ username: username }, { password: newPassword });

        return { successful: true, message: "PASSWORD UPDATED" };
      } else {
        throw new Error("PASSWORDS DO NOT MATCH!");
      }
    },
  };

  // DELETE USER 

  export const DELETE_USER = {
    type: MessageType,
    args: {
      id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
      const id = args.id;
      await Users.delete(id);

      return { successful: true, message: "DELETE WORKED" };
    },
  };
