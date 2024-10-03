import Card from 'react-bootstrap/Card';
import Icon from './profile/Icon';

const PostListComment = ({ comment }) => {

    return (
        <div className="d-flex align-items-start mb-3">
        <Icon />

        <Card className="ms-3" style={{ backgroundColor: '#e6ebf5', borderRadius: '10px' }}>
            <Card.Body>
            <Card.Title className="fw-bold mb-1"> Someone </Card.Title>
            <Card.Text>{comment.content}</Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default PostListComment