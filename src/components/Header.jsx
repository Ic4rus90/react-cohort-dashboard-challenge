import Logo from "../assets/title-header.svg" 
import '../styling/header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={Logo} className="logo"/>
            </div>
            <div className="header-right">
            </div>
        </header>
    )
}

export default Header;