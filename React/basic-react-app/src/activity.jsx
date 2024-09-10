import './activity.css';

function Activity({nam, feature, discription, oldPrice, newPrice}){
    let styles = {
        backgroundColor: "yellow",
        height: "30px",
        
    };
    return(
        <div className="card">
            <h4>{nam}</h4>
            <p>{feature}</p>
            <p>{discription}</p>
            <div style={styles} className='price'>
                <span className='oldPrice'>{oldPrice}</span>
                &nbsp; &nbsp;
                <span><b>{newPrice}</b></span>
            </div>
        </div>
    );
}

export {Activity};