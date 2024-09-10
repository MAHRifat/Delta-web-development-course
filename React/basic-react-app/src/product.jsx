import './product.css';

function Product({title, price = 0, features, features2}){
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h4>{features.map((feature)=> <li>{feature}</li>)}</h4>
            <h5>{price}</h5>
            <h3>{features2.b}</h3>
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