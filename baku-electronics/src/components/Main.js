import React from 'react'
import advertImg from '../assets/images/28may-news.jpg'
import Categories from './Categories'
import Products from './Products'
function Main() {
    return (
        <div>
            <br></br>
            <hr></hr>
            <div className='row'>
                <div className='col-6'>
                    <div className='advertImg'>
                        <img src={advertImg} />
                    </div>

                </div>
                <div className='col-6'>
                    <div className='content'>
                        <a href="">Bütün kampaniyalar</a>
                    </div>
                    <div className='my-5'>
                        <div className='content-header'>
                            <p>Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!</p>
                        </div>
                        <div className='content-area'>
                            <p>15-31 may tarixləri arasında alış-verişlərdə müstəqilsən!<br />Nağd alışda 50 %-dək endirim!Məişət texnikası, TV və kondisioner 0 0 0 18 AY Smart-saat və aksesuarlar 0 0 18 AY</p>
                            <button>Ətraflı</button>
                        </div>

                    </div>

                    <div className='blog-perioud'>
                        <div class="dates">Kampaniyanın sonuna qalıb</div>
                        <div class="countdown" data-date="2023-05-31 23:45:00" data-days="gün" data-hours="saat" data-minutes="dəq"><div class="time days flip"><span class="count">08</span><span class="label">gün</span> <span> : </span></div><div class="time hours flip"><span class="count"> 00</span><span class="label">saat</span><span> : </span></div><div class="time minutes flip"><span class="count">26</span><span class="label">dəq</span></div></div>
                    </div>
                </div>

            </div>
            <div className='row'>
             <div className='col-3'>
                <Categories/>
             </div>
             <div className='col-9'>
                        <Products/>
                        <Products/>
                        <Products/>
                        <Products/>


             </div>
            </div>
        </div>

    )
}

export default Main
