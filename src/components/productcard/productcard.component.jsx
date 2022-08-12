import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import './productcard.styles.scss';


const ProductCard = ({ product }) => {
    const { name, price, imageUrl, category } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product); 

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}:-</span>
                <span className='category'>{category}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    );
};

export default ProductCard;