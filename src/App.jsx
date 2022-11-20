import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Layout } from './layout/Layout';
import { ProtectedRoutes } from './layout/ProtectedRoutes';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './layout/PublicRoutes';
import { SuccessPage } from './components/SuccessPage';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log('user', user);

  return (
    <Routes element={<Layout />}>
      {/* protect paths */}
      <Route element={<ProtectedRoutes user={user} />}>
        <Route element={<Home />} path='/' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<Product />} path='/product/:id' />
        <Route element={<ProductList />} path='/products/:category' />
        <Route element={<SuccessPage />} path='/success' />

        <Route path='/*' element={<Navigate to='/' replace />} />
      </Route>

      {/* public paths */}
      <Route path='/' element={<PublicRoutes user={user} />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/*' element={<Navigate to='/login' replace />} />
      </Route>
    </Routes>
  );
};

export default App;
