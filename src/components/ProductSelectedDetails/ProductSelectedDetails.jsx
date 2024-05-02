import { useParams, Link } from 'react-router-dom'
import productsData from './../../data/products.json'

const ProductSelectedDetails = () => {

    const { productId } = useParams()

    const foundProduct = productsData.find(elm => elm.id == productId)

    return (
        <div className='ProductSelectedDetails'>
            <h1>Esta es la marca ➡️ {foundProduct.brand}</h1>
            <p>Este es el precio ➡️ {foundProduct.price}$</p>
            <hr />
            <Link to={'/'}>Volver</Link>
        </div>
    )
}

export default ProductSelectedDetails