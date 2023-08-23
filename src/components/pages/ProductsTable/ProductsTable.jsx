import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from './Product/Product';

const ProductsTable = () => {
  return (
    <>
      <Container className='py-5'>
        <div className='d-flex align-items-center justify-content-between'>
          <h1>Products Table</h1>
          <Link to='/product/create' className='btn-yellow text-decoration-none text-center'>Add Product</Link>
        </div>
        <hr />
        {/* Table of Products */}
        <Table bordered hover responsive className='align-middle mt-3'>
          <thead>
            <tr>
              <th>N.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image url</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ProductsTable;