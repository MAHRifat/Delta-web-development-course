import { Product, Hello } from "./product";
import './productCard.css';

function ProductCard(){
    return(
        <div className="productCard">
            <Product title="Phone" price={30000} />
            <Product title="Laptop" price={60000} />
            <Product title={"Desktop"} price={20000}/>
            <Product title={"Tab"} />
            <Hello userName={"Rifat"} colour={"pink"}/>
        </div>
    );
}

export default ProductCard;