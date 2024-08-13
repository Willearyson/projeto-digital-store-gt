import '../styles/list-product.css'
import CheckBox from './Checkboxes';
import Card from './Card'
import { Link } from 'react-router-dom';
import '../App.css'

const ListProduct = () => {
    return ( 
        <>
            <section className="list-product-bg">
                <div className="container">
                    <div className="result-order-area">
                        <div className="result">
                            <p className='result-text-1'>Resultados para “Tênis”</p>
                            <p>-</p>
                            <p className='result-text-2'>389 produtos</p>
                        </div>
                    </div>
                    <div className="list-area">
                        <aside className='filter-bg'>
                            <p className='filter-text-small'>Filtrar por</p>
                            <span className='filter-line'></span>
                            <CheckBox/>
                        </aside>
                        <div className="list-product-area">
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            <Link to='/produtos/produtoview'>
                                <Card/>
                            </Link>
                            
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default ListProduct;