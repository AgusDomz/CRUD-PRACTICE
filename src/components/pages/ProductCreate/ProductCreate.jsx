import { Form, Container } from 'react-bootstrap';


const ProductCreate = () => {

  const categories = ['Bebida', 'Panificacion', 'Cafe'];

  return (
    <>
    <Container className='py-5 '>
    <div className='d-flex align-items-center justify-content-between'>
          <h1>Create Product</h1>
        </div>
        <hr />
      <Form>
        <Form.Group controlId="productName">
          <Form.Label>Nombre del Producto</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" required />
        </Form.Group>

        <Form.Group controlId="url">
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select">
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <button className='btn-yellow mt-3 text-decoration-none text-center'>Save</button>
      </Form>
    </Container>
    </>
  )
}

export default ProductCreate