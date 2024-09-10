import './product.css';

function Product({title, price = 0}){

    // if(price >= 30000){
    //     return(
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>{price}</h5>
    //             <p>Discount: 5%</p>
    //         </div>
    //     );
    // }
    // else{
    //     return(
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>{price}</h5>
    //         </div>
    //     );
    // }

    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
            {/* {price >= 30000 ? <p>"Discount: 5%"</p> : null} */}
            {/* another way to write conditions */}
            {price >= 30000 && <p>Discount: 5%</p>}  
        </div>
    );

  
}


export {Product};