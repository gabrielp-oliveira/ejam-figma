import React from 'react'
import LeftImage from '../../assets/specialSection/LeftImage.png'
import RightImage from '../../assets/specialSection/RightImage.png'
import Star from '../../assets/star.png'
import checkMark from '../../assets/tick-circle.png'
import rightArrow from '../../assets/Line 1.png'
import lock from '../../assets/lock.png'
import amex from '../../assets/payments/amex.png'
import gpay from '../../assets/payments/gpay.png'
import APay from '../../assets/payments/apple pay.png'
import masterCard from '../../assets/payments/mastercard.png'
import paypal from '../../assets/payments/paypal.png'
import visa from '../../assets/payments/visa.png'
import shopPay from '../../assets/payments/shop pay.png'
import satisfaction from '../../assets/satisfaction.png'
import user from '../../assets/user.png'
import verify from '../../assets/verify.png'
import './mainContent.css'
function SpecialOffer() {
  return (
    <div className='specialContent'>
      <div className='productImage'>
        <img src={LeftImage}></img>
        <div className='review-user'>
          <div>
            <img className='user-pic' src={user}></img>
            <div className='review-user-details'>
              <div className='review-stars'>
                <ul>
                  <li><img src={Star}></img></li>
                  <li><img src={Star}></img></li>
                  <li><img src={Star}></img></li>
                  <li><img src={Star}></img></li>
                  <li><img src={Star}></img></li>
                </ul>
              </div>
              <div>
                <h5>Ken T.</h5>
              <img src={verify}></img>
              </div>
            </div>

          </div>
          <div className='user-depoiment'>
            <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
          </div>
        </div>
      </div>
      <section className='productContent'>
        <h1><span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span><br className='brk' />  ($84.00 total!)</h1>
        <div className='productDetails'>
          <img src={RightImage}></img>
          <div>
            <div className='productDetails-description'>

              <h5>Clarifion Air Ionizer</h5>
              <div>
                <del>$180</del>
                <span>$84</span>
              </div>
            </div>
            <div className='reviewStarts'>
              <img src={Star}></img>
              <img src={Star}></img>
              <img src={Star}></img>
              <img src={Star}></img>
              <img src={Star}></img>
            </div>
            <div className='quantity'><input className='checkbox-round' type="checkbox" name="" id="" /> <span>12 left in Stock</span></div>
            <p className='light-text'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
          </div>
        </div>
        <p className='txt-responsive light-text'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>

        <div className='product-advantages'>
          <ul>
            <li>
              <img src={checkMark} /><p>Negative Ion Technology may <span>help with allergens</span></p>
            </li>
            <li>
              <img src={checkMark} /><p>Designed for <span>air rejuvenation</span></p>
            </li>
            <li>
              <img src={checkMark} /><p><span>Perfect for every room</span> in all types of places.</p>
            </li>
          </ul>
        </div>
        <div className='save'>
          <div>

            <span className='circle blue'>%</span>
            <p>Save <span className='emphasis'>53%</span> and get <span className='emphasis'>6 extra Clarifision</span> for only <span className='emphasis'>$14 Each</span>.</p>
          </div>
        </div>
        <div className='claim-container'>
          <div className='claim'>

            <p>Yes - Claim my discount</p> <img src={rightArrow}></img>
          </div>
          <div className='claim-details'>
            <div>

            <div><p>Free shipping</p></div>
            <div><img src={lock} className='lock'></img> <p>Secure 256-bit SSL encryption.</p> </div>
            </div>
            <div className='paymentsOptions'>
              <img src={visa}></img>
              <img src={shopPay}></img>
              <img src={paypal}></img>
              <img src={masterCard}></img>
              <img src={gpay}></img>
              <img src={APay}></img>
              <img src={amex}></img>
            </div>
          </div>
          <div className='deny'><p>No thanks, I don’t want this.</p></div>
          <div className='satisfaction-badge'>
            <img src={satisfaction}></img>
            <p className='light-text'>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details.<br/> Happy Shopping!</p>
          </div>
        </div>


      </section>
    </div>
  )
}

export default SpecialOffer