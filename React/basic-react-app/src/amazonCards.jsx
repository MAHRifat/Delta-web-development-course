import { Activity } from "./activity";
import './amazonCards.css';

function AmazonCards(){
    return(
        <div className="cards">
            <Activity 
            nam={"Logitech MX Master"} 
            feature="8000 DPI" 
            discription= "5 Programmable Buttons" 
            oldPrice="12,464" 
            newPrice= "8,999"/>
            <Activity 
            nam={"Apple Pencil (2nd Gen)"} 
            feature="Intuitive Touch Surface" 
            discription= "Designed for iPad Pro" 
            oldPrice="11,900" 
            newPrice= "9,199"/>
            <Activity 
            nam={"Zebronics"} 
            feature="Designed for iPad" 
            discription= "Intuitive Touch Surface" 
            oldPrice="1,500" 
            newPrice= "899"/>
            <Activity 
            nam={"Petronicd Toad"} 
            feature="8000 DPI" 
            discription= "5 Programmable Buttons" 
            oldPrice="12,464" 
            newPrice= "8,999"/>

        </div>
    );
}

function Heading(){
    return(
        <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
    )
}

export {AmazonCards, Heading};