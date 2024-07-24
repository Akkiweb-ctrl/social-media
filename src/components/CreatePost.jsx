import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostListContext";

const CreatePost = ({ setSelectedTab }) => {
  const { addPost } = useContext(PostListContext);
  const inputForm = useRef(null);
  const handleSubmitButton = () => {
    event.preventDefault();
    const form = inputForm.current;

    const newPostData = {
      title: form["inputTitle"].value,
      body: form["inputBody"].value,
      tags: form["inputTags"].value.split(" "),
      userId: form["inputUserId"].value,
    };

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newPostData,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        
        addPost(post);
      });

    setSelectedTab("Home");
    form["inputTitle"].value= ""
    form["inputBody"].value=""
    form["inputTags"].value=""
  };
  return (
    <form ref={inputForm} className="create-post">
      <div className="mb-3">
        <label htmlFor="exampleInputTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          name="inputTitle"
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
          name="inputBody"
          placeholder="Enter your body here..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputUserId" className="form-label">
          User Id
        </label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          name="inputUserId"
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
          name="inputTags"
          placeholder="Enter your tags here seperated by space..."
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmitButton}
      >
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
