import { Product } from "./product";
import './productCard.css';

function ProductCard(){
    return(
        <div className="productCard">
            <Product title="Phone" price={30000}/>
            <Product title="Laptop" price={60000}/>
            <Product title={"Desktop"} price={"unlimited"}/>
            <Product title={"Tab"}/>
        </div>
    );
}

export default ProductCard;