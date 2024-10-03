import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const CompanyInfo = ({ handleChange, profileData}) => {
    
    return (
    <Container className="mt-4">
      <h3>Company info</h3>
      <Form>
        <Form.Group controlId="formCompanyName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text" 
          name="companyName"
          value={profileData.companyName} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCompanyCatchPhrase" className="mb-3">
          <Form.Label>Catch Phrase</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="companyCatchPhrase"
          value={profileData.companyCatchPhrase} 
          onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username*</Form.Label>
          <Form.Control 
          style={{ backgroundColor: '#e6ebf5' }}
          type="text"
          name="username"
          value={profileData.businessStatement} 
          onChange={handleChange}
          />
        </Form.Group>
    
      </Form>
    </Container>
    )

}

export default CompanyInfo