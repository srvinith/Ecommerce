import React from 'react'
import './Products.css'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
const Products = () => {
  return (
    <>
    <section className="card-container">
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="card-images"  className='card-img'/>
        <div className="card-details">
          <div className="card-title">Shoes</div>
        </div>
        <section className='card-reviews'>
          <AiFillStar  className='rating-star' />
          <AiFillStar  className='rating-star'/>
          <AiFillStar  className='rating-star'/>
          <AiFillStar className='rating-star' />
          <span className="total-reiviews">4</span>
        </section>
        <section className='card-price'>
          <div className="price">
          <del>$ 300</del>$ 250
          </div>

          <div className="bag">
          <BsFillBagHeartFill  className='bag-icon'/>
        </div>
        </section>
       
      </section>
    </section>
    </>
  )
}

export default Products