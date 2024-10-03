import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const AddressInfo = ({ handleChange, profileData}) => {
    
    return (
        <Container className="mt-4">
      <h3>Address Info</h3>
      <Form>
        <Form.Group controlId="formStreet" className="mb-3">
          <Form.Label>Street</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text" 
          name="street"
          value={profileData.street} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formSuite" className="mb-3">
          <Form.Label>Suite</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="suite"
          value={profileData.suite} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCity" className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="city"
          value={profileData.city} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formZipCode" className="mb-3">
          <Form.Label>Username*</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="zipCode"
          value={profileData.zipCode} 
          onChange={handleChange}
          />
        </Form.Group>
        
      </Form>
    </Container>
    )

}

export default AddressInfo