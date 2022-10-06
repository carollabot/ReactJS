import "./navbar.css"
import logo from "./Assets/logo.gif"
import CartWidget from "../CartWidget/cartwidget"
import { Link } from "react-router-dom"


const Navbar = () => {
    return(
        <nav className="navBar" >
            <div className="navBrand">
                <Link to="/">
                <img style={{height:40}} src={logo} alt="logo"/>
                <h1>BLACKMAMBA</h1>
                </Link>
            </div>
            <div className="navBtn">
                <button className="navLink">Top</button>
                <button className="navLink">Bottom</button>
                <button className="navLink">Accesories</button>
                <button className="navLink">Contact</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar