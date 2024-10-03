import Logo from "../assets/title-header.svg" 
import '../styling/header.css'
import Icon from "./profile/Icon";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={Logo} className="logo"/>
            </div>
            <div className="header-right">
                <Icon/>
            </div>
        </header>
    )
}

export default Header;