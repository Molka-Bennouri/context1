import ProductBox from './ProductBox';

function Home({products}) {
  return (
    <div className='d-flex flex-wrap justify-content-center gap-2 m-4'>
        {products.map(function(product){
        return <ProductBox product={product}/>
      })}
    </div>
  )
}

export default Home