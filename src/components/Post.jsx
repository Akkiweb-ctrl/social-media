import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/PostListContext";
const Post = ({ post }) => {
    const {deletePost} = useContext(PostListContext);
  return (
    <div className="card posts" style={{ width: "30rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deleteBtn" onClick={()=>deletePost(post.id)}>
        <MdDelete />
      </span>
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}.</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has {post.reactions} reactions.
        </div>
      </div>
    </div>
  );
};
export default Post;
