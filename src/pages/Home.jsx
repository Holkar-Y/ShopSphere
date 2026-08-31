import React from 'react'
import homeFashion from '../assets/home-fashion.jpg'
import CategoryCard from '../components/CategoryCard'
import menCat from '../assets/men-cat.png'
import shoesCat from '../assets/shoes-cart.png'
import accCat from '../assets/acc-cat.png'
import womenCat from '../assets/women-cat.png'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const categories=[
    {
      name:"Men",
      imge: menCat,
      alt:"Mens",
      category: "men"
    },
    {
      name:"Women",
      imge: womenCat,
      alt:"Womens",
      category: "women"
    },
    {
      name:"Shoes",
      imge: shoesCat,
      alt:"Shoes",
      category: "shoes"
    },
    {
      name:"Accessories",
      imge: accCat,
      alt:"Accessories",
      category: "accessories"
    },
  ];
  return (
    <div>
      <div className='hero-section'>
        <section className='home-left'>
          <h1>Elevate your style</h1>
          <p>Discover the latest fashion trends designed for your unique style.</p>

          <div className="home-btn">
            <button>Shop Now</button>
            <button>Explore</button>
          </div>
        </section>
        
        <section className='home-right'>
          <img src={homeFashion} alt="Fashion Image" className='homeImg'/>
        </section>
      </div>

      <div className='category'>
        <h1>Shop By Category</h1>

        <section  className="main-category">
        {categories.map(({name, imge, alt, category})=>{
          return(
              <CategoryCard key={name} name={name} img={imge} alt={alt} category={category}/>
          )
        })}
        </section>


      </div>
    </div>

  )
}

export default Home
