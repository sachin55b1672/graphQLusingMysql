import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GETUSER, } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD, LOGIN_USER} from "./Mutations/User";
import { CREATE_POST, DELETE_POST, UPDATE_POST } from "./Mutations/Post";
import { getAllPOST, GETPOST } from "./Queries/Post";
import { GETALLCOMMENTS, GETCOMMENT } from "./Queries/comment";
import { CREATE_COMMENT, DELETE_COMMENTS, UPDATE_COMMENT } from "./Mutations/comment";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    oneUser: GETUSER,
    getAllPost: getAllPOST,
    getPost: GETPOST,
    getAllcomments: GETALLCOMMENTS,
    getcomment: GETCOMMENT
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    loginUser:LOGIN_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    createPost: CREATE_POST,
    updatePost: UPDATE_POST,
    deletePost: DELETE_POST,
    createComment: CREATE_COMMENT,
    updateComment: UPDATE_COMMENT,
    deleteComment: DELETE_COMMENTS,


  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
