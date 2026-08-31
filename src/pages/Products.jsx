import React, { useEffect, useState } from 'react'
import {getProducts} from '../services/productService'
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  const [searchParams]= useSearchParams();
  const category=searchParams.get("category");
  
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState("default");
  const [products, setProducts]=useState([]);  
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  const categoryMap={
    men:"men's clothing",
    women:"women's clothing",
    shoes:"electronics",
    accessories:"jewelery"
  };
  const filteredProducts=products.filter((product)=>{
    const matchesCategory=!category||product.category===categoryMap[category];

    const matchesSearch=product.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch
  })

  const sortedProducts=[...filteredProducts];
  if(sort==="low-high"){
    sortedProducts.sort((a,b)=>a.price-b.price);
  }
  if(sort==="high-low"){
    sortedProducts.sort((a,b)=>b.price-a.price);
  }

  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
        const data=await getProducts();
        setProducts(data);
      }
      catch(error){
        setError(error.message);
      }
      finally{
        setLoading(false);
      }
    };
    fetchProducts();
  },[]);
  
  return (
    <div className='products-page'>
      {loading?(<h1 className='products-title'>Loading products</h1>):(<h1 className='products-title'>Product page</h1>)}
      {error && <p>{error}</p>}

    <div className="products-control">
      <input type="text" className='products-search' placeholder='Search products...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      
      <select className='products-sort' value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value="default">Default</option>
        <option value="low-high">Price: Low - High</option>
        <option value="high-low">Price: High - Low</option>
      </select>
    </div>

    <div className="product-grid">
      {!loading && !error && sortedProducts.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
    </div>
  )
}

export default Product
