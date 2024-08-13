import {Link} from 'react-router-dom'
import '../styles/banner.css'
import ornament from '../assets/imgs-pages/Ornament 11.png'

const Banner = () => {
    return ( 
        <>
             <section className="content-page">
            <div className="bg-banner">
               <div className="container">
                  <div className="banner-area">
                     <div className="text-banner">
                        <p className="text-banner-top-p">Melhores ofertas personalizadas</p>
                        <h1>Queima de estoque Nike</h1>
                        <p className="text-banner-bot-p">veniam corporis quisquam esse perspiciatis fugiat, veritatis voluptatum nam cumque.</p>
                        <Link className="banner-offers" to="/ofertas">Ver Ofertas</Link>
                     </div>
                  
                        <img src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WtWWHff6nepswQZMQU7z7xkFFkJtEEAJW591Bl~Qg5JwIsw7mZLMyt34yxXSedILbZEMVof0PgruRJKjfq2MeD4tFoP~S3GVw~cehwJlr~YBdsgqXVdDoKhkeQ4RwtYh77ThrM6nybgYGiW3LXIKBaMdGCvnKok721SJ0TKDIO6TrKTXlhU2Cm0LSREIv7JHGecGFUtWZugrqwWJpaU2AKUbyP~cQdiGF1bkFcMbzaPZO8mbDudrcNNJFMZW1aaPGmHS6kYN4G1xa4BNEd6FcBIoVhDo8XKJYhLbSGy1HMDhKJq87OawFv6XRo7~P4DO~QDZWsnNcjNuVxyu-1G6qQ__" alt="" className="sneaky-banner-img"/>
                        <img src={ornament} alt="" className="ornament" />
                        <div className="point-slider">
                           <div className="point-selection">
                              <div className="point"></div>
                              <div className="point"></div>
                              <div className="point"></div>
                              <div className="point"></div>
                           </div>
                        </div>
                  </div>
               </div>
            </div>
         </section>
        </>
     );
}
 
export default Banner;