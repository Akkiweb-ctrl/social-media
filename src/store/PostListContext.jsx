import { Children, useReducer } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList,action )=>{
    let newList = currPostList;
    if(action.type==="DELETE_POST"){
        newList = currPostList.filter((post)=>post.id!==action.payload.postId)
    }
    else if(action.type==="ADD_POST"){
        const newPost ={
            id:"3",
            title:action.payload.newPostData.title,
            body:action.payload.newPostData.body,
            reactions:0,
            userId:"",
            tags:action.payload.newPostData.tags
        }
        newList = [newPost,...currPostList];
    }
    return newList;

}

const PostListContextProvider = ({children}) =>{
    const DEFAULT_POST_LIST =[
    {
        id:"1",
        title : "first Post",
        body : "This is my first post.Feeling happy",
        reactions : 3,
        userId : "user1",
        tags : ["happy","newBeginnings","socialmedia"]
    },

    {
        id:"2",
        title : "On vacations",
        body : "Kashmir : Heaven on earth",
        reactions : 30,
        userId : "user2",
        tags : ["heaven","kashmir","heavenonearth","vacation"]
    }
]
const [postList,dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
const addPost = (newPostData) =>{
    dispatchPostList({
        type:"ADD_POST",
        payload:{
            newPostData
        }
    })
}
const deletePost = (postId) =>{
    dispatchPostList({
        type:"DELETE_POST",
        payload:{
            postId
        }
    })
}

return (
    <PostListContext.Provider value= {{postList,addPost,deletePost}}>
        {children}
    </PostListContext.Provider>
)


}
export default PostListContextProvider;
