import Header from "../componentes/Header";
import Footer from '../componentes/Footer'
import Card from '../componentes/Card'
import '../styles/productviwe.css'
import arrowleft from '../assets/arrow-left.svg'
import arrowright from '../assets/arrow-right.svg'
import produtoimg1 from '../assets/imgs-pages/produc-image-1.jpeg'
import produtoimg2 from '../assets/imgs-pages/produc-image-2.jpeg'
import produtoimg3 from '../assets/imgs-pages/produc-image-3.jpeg'
import produtoimg4 from '../assets/imgs-pages/produc-image-4.jpeg'
import produtoimg5 from '../assets/imgs-pages/produc-image-5.jpeg'
import produtothumb1 from '../assets/imgs-pages/product-thumb-1.jpeg'
import produtothumb2 from '../assets/imgs-pages/product-thumb-2.jpeg'
import produtothumb3 from '../assets/imgs-pages/product-thumb-3.jpeg'
import produtothumb4 from '../assets/imgs-pages/product-thumb-4.jpeg'
import produtothumb5 from '../assets/imgs-pages/product-thumb-5.jpeg'

import { Link } from "react-router-dom";

const ProductView = () => {
    return ( 
        <>
            <Header/>
            <section>
                <div className="container">
                    <div className="product-view-content">
                        <div className="product-view-paths">
                            <p>Home</p>
                            <p>/</p>
                            <p>Produtos</p>
                            <p>/</p>
                            <p>Tênis</p>
                            <p>/</p>
                            <p>Nike</p>
                            <p>/</p>
                            <p>Tênis Nike Revolution 6 Next Nature Masculino</p>

                        </div>
                        <div className="product-view-gallery">
                            <div className="arrow-left">
                                <img src={arrowleft} alt="" />
                            </div>
                            <div className="arrow-right">
                                <img src={arrowright} alt="" />
                            </div>
                            <div className="product-view-gallery-image">
                                <img className="show" src={produtoimg1} alt="" />
                                <img className="hiden" src={produtoimg2} alt="" />
                                <img className="hiden" src={produtoimg3} alt="" />
                                <img className="hiden" src={produtoimg4} alt="" />
                                <img className="hiden" src={produtoimg5} alt="" />
                                <div className="thumbs-area">
                                    <img src={produtothumb1} alt="" />
                                    <img src={produtothumb2} alt="" />
                                    <img src={produtothumb3} alt="" />
                                    <img src={produtothumb4} alt="" />
                                    <img src={produtothumb5} alt="" />
                                </div>
                            </div>
                            
                            <div className="product-view-gallery-info">
                                <div className="product-view-gallery-name">
                                    <h1>
                                    Tênis Nike Revolution 
                                    6 Next Nature Masculino
                                    </h1>
                                </div>
                                <div className="product-view-gallery-category">
                                    <p>Casual | Nike | REF:38416711 b</p>
                                </div>
                                <div className="product-view-gallery-avaliation">
                                    
                                </div>
                                <div className="product-view-gallery-price">
                                    <p>R$ 219,00</p>
                                </div>
                                <div className="product-view-gallery-description">
                                    <div className="description-product">
                                        <p>Descrição do produto</p>
                                    </div>
                                    <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                    </p>
                                </div>
                                <div className="product-view-gallery-sizes">
                                    <p>Tamanho</p>
                                    <div className="sizes">
                                        <div className="size-icon">
                                           39
                                        </div>
                                        <div className="size-icon">
                                            40
                                        </div>
                                        <div className="size-icon">
                                            41
                                        </div>
                                        <div className="size-icon">
                                            42
                                        </div>
                                        <div className="size-icon">
                                            43
                                        </div>
                                    </div>
                                </div>
                                <div className="product-view-gallery-buy">
                                    <Link> comprar</Link>
                                </div>
                            </div>
                        </div>
                        <div className="related-products">
                            <div className="title">
                                <h3>Produtos Relacionados</h3>
                            </div>
                            <div className="related-products-cards">
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
     );
}
 
export default ProductView;