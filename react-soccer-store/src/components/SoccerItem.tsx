import { Soccer } from '../util/SoccerList'
import '../App.css'

const SoccerItem = (
    {
        soccer
    }:
    {
        soccer: Soccer
    }
) => {
    
    return (
        <li className='soccer-item'>
            <article>
                <img src={soccer.image} alt="" />
                <div>
                <h3>{soccer.title}</h3>
                <p className="soccer-item-price">
                    ${soccer.price.toFixed(2)}
                </p>
                </div>
                <p className="soccer-item-actions">
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default SoccerItem