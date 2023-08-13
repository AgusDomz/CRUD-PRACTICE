import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home/Home';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import ProductsTable from './components/pages/ProductsTable/ProductsTable';
import ProductCreate from './components/pages/ProductCreate/ProductCreate';
import ProductEdit from './components/pages/ProductEdit/ProductEdit';
import Error404 from './components/pages/Error404/Error404';



function App() {
  return (
    <>
    <NavBar />
    <main>
      <Home />
      <ProductsTable />
      <ProductCreate />
      <ProductEdit />
      <Error404 />
    </main>
    <Footer />
    </>
  );
}

export default App
