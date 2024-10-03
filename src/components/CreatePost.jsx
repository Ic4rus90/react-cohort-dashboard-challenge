import axios from "axios";
import { useState } from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const CreatePost = () => {
    const [post, setPost] = useState({
        "title": "Nothing special",
        "content": "",
        "contactId": 3
    })

    const handleSubmit = () => {
        console.log(post)
        axios
        .post(`https://boolean-uk-api-server.fly.dev/Ic4rus90/post`, post)
        .then((res) => console.log(res))
        .catch((err) => console.error("An error occurred when posting post: ", err))
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setPost({...post, content: value});
    }

    return (
        <InputGroup className="mb-3" >
            <FormControl
                style={{ backgroundColor: '#e6ebf5' }}
                placeholder="What's on your mind?"
                aria-label="Comment"
                name="comment"
                value={post.content}
                onChange={handleChange}
            />
            <Button variant="primary" onClick={handleSubmit}>
                Comment
            </Button>
        </InputGroup>
      );
};

export default CreatePost;