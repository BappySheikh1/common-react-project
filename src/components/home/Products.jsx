import SingleProduct from "./SingleProduct"

function Products() {
  return (
    <div>
      <h1 className="my-8">Our Products </h1>
     <div className="flex gap-3 justify-between">
         <SingleProduct />
         <SingleProduct />
         <SingleProduct />
     </div>
    
    </div>
  )
}

export default Products
