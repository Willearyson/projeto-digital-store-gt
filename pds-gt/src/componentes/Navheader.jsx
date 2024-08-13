import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/navheader.css'
const Navheader = () => {
    return ( 
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/produtos'>Produtos</Link>
                    </li>
                    <li>
                        <Link to='/categoria'>Pategoria</Link>
                    </li>
                    <li>
                        <Link to='/pedidos'>Meus pedidos</Link>
                    </li>
                </ul>
            </nav>
        </>
     );
}
 
export default Navheader;