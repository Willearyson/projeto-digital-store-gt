
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import ProductListPage from '../pages/ProductListPage';
import ProductView from '../pages/ProductView';
import Pedidos from '../pages/Pedidos';

const Paths = () => {
    return ( 
        <>
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/produtos' element={<ProductListPage/>}></Route>
              <Route path='/produtos/produtoview' element={<ProductView/>}></Route>
              <Route path='/pedidos' element={<Pedidos/>}></Route>
          </Routes>
          </BrowserRouter>
        </>
     );
}
 
export default Paths;