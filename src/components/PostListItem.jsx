import axios from "axios"
import { useEffect, useState } from "react"
import PostList from "./PostList"
import AddComment from "./AddComment"
import '../styling/postlistitem.css'
import Card from 'react-bootstrap/Card';
import PostListComment from "./PostListComment"

const PostListItem = ({ post, id }) => {
    const [comments, setComments] = useState([])
    const [contact, setContact] = useState({})

    useEffect(() => {
        axios
        .get(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${id}/comment`)
        .then(res => setComments(res.data))
        .catch((err) => console.error("An error occurred when getting comments: ", err))
    }, [id])


    useEffect(() => { 
        axios
        .get(`https://boolean-uk-api-server.fly.dev/Ic4rus90/contact/${post.contactId}`)
        .then(res => setContact(res.data))
        .catch((err) => console.error("An error occurred when attempting to get contact: ", err))
    }, [post]);

    return (
            <Card >
              <Card.Body>
                <Card.Title> {contact.firstName} {contact.lastName} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" > {post.title} </Card.Subtitle>
                <Card.Text >
                  {post.content}
                </Card.Text>
                <ul className="d-flex flex-column" style={{ gap: '10px' }}>
                    {comments.map((comment, i) => (
                            <PostListComment 
                            comment={comment} 
                            key={i}
                            />
                    ))}
                </ul>
                <AddComment id={id} />
              </Card.Body>
            </Card>
          );
        }
        /*
        <li key={i}> {`Comment ${i}`}: {comment.content}</li>


            <div className="post-container">
                <div className="post-header">
                    <div className='post-author-info'>
                        <img className='profile-icon' src={contact.profileImage} />
                        <p className='post-author'> 
                            {contact.firstName} {contact.lastName} 
                        </p>
                        <p className='post-title'>
                            {post.title}
                        </p>
                    </div>
                </div>

                <p className="post-content">{post.content}</p>

                <ul>
                    {comments.map((comment, i) => (
                        <li key={i}> {`Comment ${i}`}: {comment.content}</li>
                    ))}
                </ul>
                <AddComment id={id} />
            </div>
            */

export default PostListItem