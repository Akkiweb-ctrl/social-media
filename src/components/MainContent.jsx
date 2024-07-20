import CreatePost from "./CreatePost";
import PostList from "./PostList";
const MainContent = ({selectedTab}) =>{
    return (
        <>
        {selectedTab === "Home" ? <PostList></PostList> :<CreatePost></CreatePost>}
        </>
        
    );
}

export default MainContent