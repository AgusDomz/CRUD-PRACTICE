// import { Link } from 'react-router-dom'
// import Swal from 'sweetalert2';

import { Link } from "react-router-dom"

const Product = () => {
  return (
    <tr>
      <td>1</td>
      <td>Medialuna</td>
      <td>$200</td>
      <td>
        <p className="truncate-img-link m-0">
          https://media.istockphoto.com/id/178462137/es/foto/croissant-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=V8aAKgCCopjvQ7Kmc2joi8VpeHtotT5ldlRuwE-rKLU=
        </p>
      </td>
      <td>Bebida</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to="/product/edit" className="btn-orange mx-1 text-decoration-none">Update</Link>
          <button className="btn-red mx-1">Delete</button>
        </div>
      </td>
    </tr>
  )
}

export default Product