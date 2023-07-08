import ProductCard from "../ui/ProductCard"
import One from "/public/one.png"


const ProductList = () => {
  return (
    <div className="flex justify-evenly mt-16">
        <ProductCard title="Imperial Alpaca Hoodie" price={525}  img={One}/>
        <ProductCard title="Imperial Alpaca Hoodie" price={525}  img={One}/>
        <ProductCard title="Imperial Alpaca Hoodie" price={525}  img={One}/>
       
       
    </div>
  )
}

export default ProductList