const Icon = () => {
    const firstName = "Frank";
    const lastName = "Petter";
    const favouriteColor = "#000000"
    
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

    const avatarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: favouriteColor,
        color: '#fff',
        borderRadius: '100%',
        width: '50px',  
        height: '50px',
        fontSize: '20px', 
        fontWeight: 'bold',
      };

    return (
        <div style={avatarStyle}>
            {initials}
        </div>
    )

}

export default Icon;