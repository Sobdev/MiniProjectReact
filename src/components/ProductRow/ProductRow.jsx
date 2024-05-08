import { Link } from "react-router-dom"

const ProductRow = ({ id, title, brand, price, rating, handleProductRemove }) => {

    return (
        <tr>
            <td>{title}</td>
            <td>{brand}</td>
            <td>{price}</td>
            <td>
                {rating > 4.5 ? '🟢' : '🔴'} {rating}
            </td>
            <td>
                <Link to={`/productos/${id}`}>
                    Ver
                </Link>
            </td>
            <td onClick={() => handleProductRemove(id)}>❌</td>
        </tr>
    )
}

export default ProductRow