import { useContext } from 'react';
import AccountInfo from './profile/AccountInfo';
import AddressInfo from './profile/AddressInfo';
import ContactInfo from './profile/ContactInfo';
import CompanyInfo from './profile/CompanyInfo';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../App';

const Profile = () => {

  const {userDetails, setUserDetails} = useContext(UserContext)
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setUserDetails((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  

  return (
    <Container>
      <Row>
        <Col>
          <AccountInfo 
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
        <Col>
          <AddressInfo
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactInfo
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
        <Col>
          <CompanyInfo
            handleChange={handleChange} 
            profileData={userDetails}/>
        </Col>
      </Row>
    </Container>
    )
}

export default Profile