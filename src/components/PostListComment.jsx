import Card from 'react-bootstrap/Card';

const PostListComment = ({ comment }) => {

    return (
        <Card >
            <Card.Body style={{ backgroundColor: '#e6ebf5' }}>
                <Card.Title style={{ color: '#64648c' }}>
                    Some name
                </Card.Title>
                <Card.Text style={{ color: '#64648c'}}>
                    {comment.content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PostListComment