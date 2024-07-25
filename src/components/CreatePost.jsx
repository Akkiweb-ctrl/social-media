import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostListContext";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
let submitted=false;

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const data= useActionData();
  if(!submitted===false){
    // console.log(data);
    addPost(data);
  }

   return (
    <Form method = "POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="exampleInputTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Enter your title here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputBody" className="form-label">
          Body
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          name="body"
          placeholder="Enter your body here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUserId" className="form-label">
          User Id
        </label>
        <input
          rows={4}
          type="text"
          className="form-control"
          name="userId"
          placeholder="Enter your user id here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          name="tags"
          placeholder="Enter your tags here seperated by space..."
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </Form>
  );
};

export const createPostAction = async (data) =>{
submitted=true;
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  // console.log(postData);

   return fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      // // navigate("/");
      // return redirect("/");
      // console.log("post" + post)
      return post;
    });
    
}
export default CreatePost;
