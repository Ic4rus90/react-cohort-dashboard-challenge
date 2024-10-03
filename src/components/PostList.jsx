import { useContext } from "react";
import { PostContext } from "../App";
import PostListItem from "./PostListItem";
import AddComment from "./AddComment";

const PostList = () => {
    const { posts } = useContext(PostContext);

    return (
            <ul className="d-flex flex-column" style={{ gap: '10px' }}>
                {posts.map((post, i) => (
                    <PostListItem 
                    post={post} 
                    id={post.id} 
                    key={i}/>
                ))}
            </ul>
    )
}

export default PostList;