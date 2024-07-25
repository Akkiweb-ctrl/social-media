import { Children, useEffect, useReducer, useState } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newList = currPostList;
  if (action.type === "DELETE_POST") {
    newList = currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newList = action.payload.newPostData;
    // console.log(newList);
  } else if (action.type === "ADD_POST") {
    const newPost = {
      id: action.payload.id,
      title: action.payload.title,
      body: action.payload.body,
      reactions: 0,
      userId: action.payload.userId,
      tags: action.payload.tags.split(" "),
    };
    newList = [newPost, ...currPostList];
    // console.log(newList);
  }
  return newList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (newPostData) => {
    // console.log(newPostData.id);
    dispatchPostList({
      type: "ADD_POST",
      payload: newPostData,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};
export default PostListContextProvider;
