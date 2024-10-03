import axios from "axios"
import { useContext, useEffect, useState } from "react"
import AddComment from "./AddComment"
import '../styling/postlistitem.css'
import Card from 'react-bootstrap/Card';
import PostListComment from "./PostListComment"
import Icon from "./profile/Icon"
import { ContactContext } from "../App"

const PostListItem = ({ post }) => {
    const [comments, setComments] = useState([])
    const [contact, setContact] = useState({
        "firstName": "",
        "lastName": "",
        "favouriteColor": ""
    })

    const { contacts } = useContext(ContactContext);

    const id = post.id;

    useEffect(() => {
        axios
        .get(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${id}/comment`)
        .then(res => {
            if (res.data) {
                setComments(res.data)
            } else {
                console.error("No contact data received");
            }
        })
        .catch((err) => console.error("An error occurred when getting comments: ", err))
    }, [id])


    useEffect(() => { 
        const contact = contacts.find((contact) => contact.id === post.contactId)
        if (contact !== undefined) {
            setContact(contact)
        }
    }, [post, contacts]);

    return (
            <Card >
              <Card.Body>
                <div className="d-flex align-items-center">  
                    <Icon contact={contact}/> 
                    <div className="ms-3">
                        <Card.Title className="fw-bold mb-2">
                            {contact.firstName} {contact.lastName}
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {post.title}
                        </Card.Subtitle>
                    </div>
                </div>
                <Card.Text>
                  {post.content}
                </Card.Text>
                <ul className="d-flex flex-column" style={{ gap: '2px' }}>
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