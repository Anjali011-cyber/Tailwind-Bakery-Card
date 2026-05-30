import React from 'react'
import ProductCard from "./components/ProductCard"
import data from "./data"

const App = () => {
  return (

    <div className='min-h-screen bg-gray-200 flex justify-center py-10'>

      <div className=' space-y-6'>

       {data.map((product) => (
          <ProductCard
          key={product.id}
          product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default App