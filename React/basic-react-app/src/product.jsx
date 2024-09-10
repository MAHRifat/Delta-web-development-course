import './product.css';

function Product({title, price = 0}){

    let styles = {backgroundColor: price > 30000 ? "blue" : null};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>{price}</h5>
            {price >= 30000 ? <p>"Discount: 5%"</p> : null}
        </div>
    );

  
}


export {Product};