import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.jpg'


function Products() {
    return (
        <div>
            <div className='row'>
                  <div className='col-4 my-4'>
                <div className='product-cart'>
                    <img src={product1} />
                    <div className='product-discount'>
                        <div className='discount-price'>300 ₼</div>
                        <div className='discount-info'>Nağd alışa ENDİRİM</div>
                    </div>
                    <div className='stars mt-2'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <a href='#'>0 rəy</a>
                    </div>
                    <div className='product-name'><a>Kondisioner LG A12CMH.NGGF-KIT, 12000 BTU / 30-40 m2, inverter</a> </div>
                    <div className='product-price mt-2'>
                        <span class="product__price--info">Qiymət</span>
                        <div class="product-price-cur">1899.99 ₼</div>
                    </div>
                   
                    <div class="product-credit">
                        Hissə-hissə ödəniş   <div class="product__credit-note">18 ay <span class="product-credit-price">106 </span> <span class="icon-manat">₼</span></div>
                    </div>


                </div>
            </div>
            <div className='col-4 my-4'>
                <div className='product-cart my-2'>
                    <img src={product2} />
                    <div className='product-discount'>
                        <div className='discount-price'>300 ₼</div>
                        <div className='discount-info'>Nağd alışa ENDİRİM</div>
                    </div>
                    <div className='stars mt-2'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <a href='#'>0 rəy</a>
                    </div>
                    <div className='product-name'><a>Kondisioner LG A12CMH.NGGF-KIT, 12000 BTU / 30-40 m2, inverter</a> </div>
                    <div className='product-price mt-2'>
                        <span class="product__price--info">Qiymət</span>
                        <div class="product-price-cur">2599.99 ₼</div>
                    </div>
                   
                    <div class="product-credit">
                        Hissə-hissə ödəniş   <div class="product__credit-note">18 ay <span class="product-credit-price">106 </span> <span class="icon-manat">₼</span></div>
                    </div>


                </div>
            </div>
            <div className='col-4 my-4'>
                <div className='product-cart'>
                    <img src={product3} />
                    <div className='product-discount'>
                        <div className='discount-price'>300 ₼</div>
                        <div className='discount-info'>Nağd alışa ENDİRİM</div>
                    </div>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <a href='#'>0 rəy</a>
                    </div>
                    <div className='product-name'><a>Kondisioner LG A12CMH.NGGF-KIT, 12000 BTU / 30-40 m2, inverter</a> </div>
                    <div className='product-price mt-2'>
                        <span class="product__price--info">Qiymət</span>
                        <div class="product-price-cur">4599.99 ₼</div>
                    </div>
                   
                    <div class="product-credit">
                        Hissə-hissə ödəniş   <div class="product__credit-note">18 ay <span class="product-credit-price">106 </span> <span class="icon-manat">₼</span></div>
                    </div>


                </div>
            </div> 
            </div>
         


        </div>

    )
}

export default Products
