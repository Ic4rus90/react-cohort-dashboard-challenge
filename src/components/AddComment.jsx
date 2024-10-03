import axios from "axios";
import { useState } from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddComment = ({ id }) => {
    const [comment, setComment] = useState({
        "postId": "",
        "content": "",
        "contactId": 420
    })

    const handleSubmit = () => {
        console.log(comment)
        setComment({...comment, postId: Number(id)})
        axios
        .post(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post/${id}/comment`, comment)
        .then((res) => console.log(res))
        .catch((err) => console.error("An error occurred when posting post: ", err))
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setComment({...comment, content: value});
    }

    return (
        <InputGroup className="mb-3" >
            <FormControl
                style={{ backgroundColor: '#e6ebf5' }}
                placeholder="Add a comment..."
                aria-label="Comment"
                name="comment"
                value={comment.content}
                onChange={handleChange}
            />
            <Button variant="primary" onClick={handleSubmit}>
                Comment
            </Button>
        </InputGroup>
      );
};

export default AddComment;