import cardImg from '../assets/imgs-pages/card-img.png'
import '../styles/card.css'
import '../App.css'
const Card = () => {
    return ( 
        <>
            <div className="card-area">
                <div className="card-img">
                    <img src={cardImg} alt="" />
                </div>
                <div className="card-text-area">
                    <p className="card-category">Tenis</p>
                    <p className="card-name-product">K-Swiss v8 - Masculino</p>
                    <div className="card-price-area">
                        <p className="price-product">$200</p>
                        <p className='price-sale'>$100</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Card;