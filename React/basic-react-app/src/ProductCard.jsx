import { Product } from "./product";
import './productCard.css';

function ProductCard(){
    // let features = [<li>Tech</li>, <li>waterproof</li> , <li>strong</li>, <li>Durable</li>];
    let features = ["Tech", "waterproof", "strong", "Durable"];
    let features2 = {
        a: "hi-tech",
        b: "waterproof",
        c: "strong"
    };
    return(
        <div className="productCard">
            <Product title="Phone" price={30000} features={features} features2={features2}/>
            <Product title="Laptop" price={60000} features={features} features2={features2}/>
            <Product title={"Desktop"} price={"unlimited"} features={features} features2={features2}/>
            <Product title={"Tab"} features={features} features2={features2}/>
        </div>
    );
}

export default ProductCard;