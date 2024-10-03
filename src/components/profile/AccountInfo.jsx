import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const AccountInfo = ({ handleChange, profileData}) => {
    
    return (
        <Container className="mt-4">
      <h3>Account info</h3>
      <Form>
        <Form.Group controlId="formFirstName" className="mb-3">
          <Form.Label>First Name*</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text" 
          name="firstName"
          value={profileData.firstName} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formLastName" className="mb-3">
          <Form.Label>Last Name*</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="lastName"
          value={profileData.lastName} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username*</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="username"
          value={profileData.username} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username*</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="username"
          value={profileData.email} 
          onChange={handleChange}
          />
        </Form.Group>
        
      </Form>
    </Container>
    )

}

export default AccountInfo