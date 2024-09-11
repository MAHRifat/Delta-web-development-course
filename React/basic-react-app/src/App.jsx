import './App.css'
import ProductCard from './ProductCard'
import {AmazonCards, Heading} from './amazonCards'
import { Button } from './Button'
import Form from './Form'



function App() {
  return (
   <>
    <Heading/>
     {/* <ProductCard/> */}
     <AmazonCards/>
     <Button/>
     <Form/>
   </>
  
  )
}

export default App
