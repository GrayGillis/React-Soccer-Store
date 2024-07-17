import soccerStore from '../images/soccerStore.png';
import { FaShoppingCart } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Header = () => {

    return (
        <header id='main-header'>
            <div className="title">
                <h1>The Soccer Store</h1>
                <img src={soccerStore} alt="X" />
            </div>
            {/* <BiArrowBack /> */}
            <nav>
                {/* <FaShoppingCart /> */}
                <button>Shopping Cart  2</button>
            </nav>
        </header>
    )
}

export default Header