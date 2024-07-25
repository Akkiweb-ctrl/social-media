import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListContext";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const postList = useLoaderData();
  return (
    <>     
      {postList.length === 0 && (
        <div className="no-posts">
          <h2>There are no posts</h2>
          <button type="button" className="btn btn-primary">
            Get all posts
          </button>
        </div>
      )}
      {postList.map((post) => (
         <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = () =>{
    return fetch("https://dummyjson.com/posts" )
      .then((res) => res.json())
      .then((data) => {
          return data.posts;
      });
};
export default PostList;

