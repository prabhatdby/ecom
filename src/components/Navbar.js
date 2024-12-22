import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


function Navbar(prop) {
    const { cart } = useContext(CartContext);
    console.log(cart)
    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li className="nav-item ms-auto" style={{ display: 'flex', marginRight: '50px' }}>
                    <Link className="nav-link" to="/cartItems">Cart
                    <img 
                        src="https://www.essent.com/SiteData/SiteID34/Images/B2B-Ecommerce/B2B%20Ecommerce%202%20Cart%20Y.png"
                        className="card-img-top"
                        alt="..."
                        style={{ width: '35px', height: '35px', alignSelf: 'center' }}
                    />
                    <span style={{ backgroundColor: 'yellow', height: '23px' }}>
                        {cart?.length ? cart.length : 0}
                    </span>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar;
