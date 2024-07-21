import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListContext";
const PostList = () =>{
  const {postList} =  useContext(PostListContext)
    return(
      <>
      {postList.map((post)=>{
        return <Post  key = {post.id} post = {post}></Post>
      })}
      </>
    )
}
export default PostList;