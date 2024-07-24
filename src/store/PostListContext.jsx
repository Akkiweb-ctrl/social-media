import { Children, useEffect, useReducer, useState } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  fetching : false,
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
      id: action.payload.newPostData.id,
      title: action.payload.newPostData.title,
      body: action.payload.newPostData.body,
      reactions: 0,
      userId: action.payload.newPostData.userId,
      tags: action.payload.newPostData.tags,
    };
    newList = [newPost, ...currPostList];
  }
  return newList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
          setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const addPost = (newPostData) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        newPostData,
      },
    });
  };
  const addInitialPosts = (newPostData) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        newPostData,
      },
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
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, fetching }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListContextProvider;
