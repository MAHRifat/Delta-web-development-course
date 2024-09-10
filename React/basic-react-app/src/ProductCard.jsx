import { Product } from "./product";
import './productCard.css';

function ProductCard(){
    return(
        <div className="productCard">
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}

export default ProductCard;