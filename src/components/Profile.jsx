import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import AccountInfo from './profile/AccountInfo';
import AddressInfo from './profile/AddressInfo';
import ContactInfo from './profile/ContactInfo';
import CompanyInfo from './profile/CompanyInfo';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        "firstName": "Ayana",
        "lastName": "Upton",
        "username": "AyanaU",
        "email": "Lenny_Hammes@gmail.com",
        "street": "Street 1",
        "suite": "No",
        "city": "Unknown",
        "zipCode": "1234",
        "phone": "911",
        "website": "none",
        "companyName": "Evil inc",
        "companyCatchPhrase": "We eat you",
        "businessStatement": "We enjoy css"
      })
      
      const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      

    return (
        <div>
            <AccountInfo 
            handleChange={handleChange} 
            profileData={profileData}/>
            <AddressInfo
            handleChange={handleChange} 
            profileData={profileData}/>
            <ContactInfo
            handleChange={handleChange} 
            profileData={profileData}/>
            <CompanyInfo
            handleChange={handleChange} 
            profileData={profileData}/>
        </div>
    )
}

export default Profile