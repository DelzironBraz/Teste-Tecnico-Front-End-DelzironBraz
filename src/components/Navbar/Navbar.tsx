import { FaShoppingCart } from "react-icons/fa";
import './Navbar.scss';

const Navbar = () => {

    return (
        <header>
            <div className='navbar-container'>
                <div>
                    <a href="/" className='logo'>E-commerce</a>
                </div>

                <div className='menu-icon'>
                    <div>
                        <a href="/carrinho">
                            <FaShoppingCart size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
