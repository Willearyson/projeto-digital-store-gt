import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import '../styles/pedidos.css'

const Pedidos = () => {
    return ( 
        <>
            <Header/>
                <section className="pedidos-bg">
                    <div className="container">
                        <div className="cart-resume-area">
                            <div className="cart-resume-titles">
                                <h3> Meu carrinho</h3>
                                <div className="quant-unit-total">
                                    <p>Quantidade</p>
                                    <p>unitário</p>
                                    <p>total</p>
                                </div>
                            </div>
                            <div className="my-cart">
                                <div className="cart-about">
                                    <img src="https://s3-alpha-sig.figma.com/img/d52b/cba8/6d839d9bc81eba71990cf69a20c77364?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WtWWHff6nepswQZMQU7z7xkFFkJtEEAJW591Bl~Qg5JwIsw7mZLMyt34yxXSedILbZEMVof0PgruRJKjfq2MeD4tFoP~S3GVw~cehwJlr~YBdsgqXVdDoKhkeQ4RwtYh77ThrM6nybgYGiW3LXIKBaMdGCvnKok721SJ0TKDIO6TrKTXlhU2Cm0LSREIv7JHGecGFUtWZugrqwWJpaU2AKUbyP~cQdiGF1bkFcMbzaPZO8mbDudrcNNJFMZW1aaPGmHS6kYN4G1xa4BNEd6FcBIoVhDo8XKJYhLbSGy1HMDhKJq87OawFv6XRo7~P4DO~QDZWsnNcjNuVxyu-1G6qQ__" alt="" className="cart-img" />
                                    <div className="cart-about-product">
                                        <h3 className="cart-about-name">Tênis Nike Revolution 6 Next 
                                        Nature Masculino</h3>
                                        <p className="cart-about-color">Vermelho / Branco</p>
                                        <p className="cart-about-size">Tamanho: 42</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
     );
}
 
export default Pedidos;