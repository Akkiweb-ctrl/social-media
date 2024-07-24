import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListContext";
const PostList = () => {
  const { postList,fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!fetching && postList.length === 0 && (
        <div className="no-posts">
          <h2>There are no posts</h2>
          <button type="button" className="btn btn-primary">
            Get all posts
          </button>
        </div>
      )}
      {postList.map((post) => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </>
  );
};
export default PostList;
