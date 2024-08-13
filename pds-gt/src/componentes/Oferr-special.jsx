import '../styles/oferr.css'
import layeImg from '../assets/imgs-pages/layer.png'
import { Link } from 'react-router-dom';
const Offer = () => {
    return ( 
        <>
            <section className='oferr-bg'>
                <div className="container">
                    <div className="oferr-content">
                        <div className="oferr-img-area">
                            <div className="bg-circle"></div>
                            <img src={layeImg} alt="" />
                        </div>
                        <div className="oferr-text">
                            <p>Oferta Espacial </p>
                            <h2>Air Jordan edição de 
                            colecionador</h2>
                            <p className='jordan-textsmall'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </p>
                            <Link>Ver Oferta</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Offer;