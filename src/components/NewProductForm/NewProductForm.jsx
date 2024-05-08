import { useState } from "react"

const NewProductForm = ({ handleProductAddition }) => {

    const [productData, setProductData] = useState({
        title: '',
        price: 0,
        brand: '',
        rating: 0,
        description: ''
    })

    const handleProductChange = e => {
        const { value, name } = e.target
        setProductData({ ...productData, [name]: value })            // computed property names
    }

    const handleProductSubmit = e => {
        e.preventDefault()
        handleProductAddition(productData)
        setProductData({ title: '', price: 0, brand: '', rating: 0, description: '' })      // form reset
    }

    return (
        <div className="NewProductForm">

            <form onSubmit={handleProductSubmit}>

                <label>Nombre:</label>
                <input type="text" value={productData.title} onChange={handleProductChange} name="title" />
                <br />

                <label>Precio:</label>
                <input type="number" value={productData.price} onChange={handleProductChange} name="price" />
                <br />

                <label>Marca:</label>
                <input type="text" value={productData.brand} onChange={handleProductChange} name="brand" />
                <br />

                <label>Puntuación:</label>
                <input type="number" value={productData.rating} onChange={handleProductChange} name="rating" />
                <br />

                <label>Descripción:</label>
                <input type="text" value={productData.description} onChange={handleProductChange} name="description" />
                <br />

                <input type="submit" value='Crear producto' />

            </form>

        </div>
    )
}

export default NewProductForm