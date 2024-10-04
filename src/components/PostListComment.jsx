import Card from 'react-bootstrap/Card';
import Icon from './profile/Icon';
import { useContext, useEffect, useState } from 'react';
import { ContactContext } from '../App';

const PostListComment = ({ comment }) => {
    const [contact, setContact] = useState({
        "firstName": "A",
        "lastName": "B",
        "favouriteColor": "#c219a6"
    })

    const { contacts } = useContext(ContactContext)

    useEffect(() => {
        const matchedContact = contacts.find((contact) => contact.id === comment.contactId);

        if (matchedContact !== undefined){
            setContact(matchedContact)
        } else {
            console.log("Could not find user.")
        }
    }, [contacts, comment, contact])

    return (
        <div className="d-flex align-items-start mb-3">
        <Icon contact={contact}/>

        <Card className="ms-3" style={{ backgroundColor: '#e6ebf5', borderRadius: '10px' }}>
            <Card.Body>
                <Card.Title className="fw-bold mb-1"> 
                    {`${contact.firstName} ${contact.lastName}`}  
                </Card.Title>
                <Card.Text>{comment.content}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default PostListComment