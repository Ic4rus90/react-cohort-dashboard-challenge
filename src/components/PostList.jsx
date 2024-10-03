import { useContext } from "react";
import { ContactContext, PostContext } from "../App";
import PostListItem from "./PostListItem";
import AddComment from "./AddComment";
import CreatePost from "./CreatePost";

const PostList = () => {
    const { posts } = useContext(PostContext);

    return (
            <ul className="d-flex flex-column" style={{ gap: '10px' }}>
                <CreatePost />
                {posts.map((post, i) => (
                    <PostListItem 
                    post={post} 
                    key={i}/>
                ))}
            </ul>
    )
}

export default PostList;