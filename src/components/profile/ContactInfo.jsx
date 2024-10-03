import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const ContactInfo = ({ handleChange, profileData}) => {
    
    return (
        <Container className="mt-4">
      <h3>Contact info</h3>
      <Form>
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Street</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text" 
          name="phone"
          value={profileData.phone} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formwebsite" className="mb-3">
          <Form.Label>Suite</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="website"
          value={profileData.website} 
          onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Container>
    )

}

export default ContactInfo