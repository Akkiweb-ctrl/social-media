import { Outlet } from "react-router-dom";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
const MainContent = ({selectedTab,setSelectedTab}) =>{
    return (
        <center>
        {/* {selectedTab === "Home" ? <PostList></PostList> :<CreatePost setSelectedTab={setSelectedTab}></CreatePost>} */}
        <Outlet></Outlet>
        </center>
        
    );
}

export default MainContent;