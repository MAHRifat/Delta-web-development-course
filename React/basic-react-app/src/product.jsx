import './product.css';

function Product({title, price = 0}){
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>{price}</h5>
        </div>
    );
}
// function Product(props){
//     console.log(props);
//     return(
//         <div className="Product">
//             <h3>{props.title}</h3>
//             <h5>{props.price}</h5>
//         </div>
//     );
// }


export {Product};