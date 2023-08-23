import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home/Home';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import ProductsTable from './components/pages/ProductsTable/ProductsTable';
import ProductCreate from './components/pages/ProductCreate/ProductCreate';
import ProductEdit from './components/pages/ProductEdit/ProductEdit';
import Error404 from './components/pages/Error404/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';





function App() {
  // State
  const [products, setProducts] = useState([])

  // Variable de entorno
  // const API_URL = process.env.REACT_APP_API_KEY

  const getApi = async () => {
    try {
      const res = await fetch("http://localhost:5050/products")
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/table' element={<ProductsTable />} />
          <Route exact path='/product/create' element={<ProductCreate />} />
          <Route exact path='/product/edit' element={<ProductEdit />} />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App
