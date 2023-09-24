import React, { useEffect, useState, useRef } from 'react'
import './header.css'
import SubHeader from './SubHeader'
import checkMark from '../../assets/header/checkmark.png'
import heart from '../../assets/header/mdi_cards-heart-outline.png'
import truck from '../../assets/header/truck-light.png'
import arrow from '../../assets/header/fluent_arrow-sync-checkmark-20-regular.png'
import arrowLeft from '../../assets/header/arrow-left.png'
import arrowRight from '../../assets/header/arrow-right.png'




function Header() {
  const [current, setcurrent] = useState(1)
  const ATag = useRef(null)



  function callBackward() {
    if (current == 1) {
      setcurrent(4)
    } else {
      setcurrent(current - 1)
    }
    ATag.current.click()

  }
  function callFoward() {
    if (current == 4) {
      setcurrent(1)
    } else {
      setcurrent(current + 1)
    }
    ATag.current.click()
  }

  return (
    <>
      <header>
        {/* <a href={`#nav-header-slide-${current}`} style={{ display: 'none' }} ref={ATag}></a> */}
        <nav className='header-nav'>
          <ul>
            <ListItems />
          </ul>
        </nav>
        <nav className='slider responsive-header-nav'>
          
        <span className='controlSlider' onClick={() => callBackward()} ><img src={arrowLeft} alt='move left arrow icon'/></span>
        <HeaderResponsive current={current} ATag={ATag} />
        <span className='controlSlider' onClick={() => callFoward()}><img src={arrowRight} alt='move right arrow icon'/></span>
        </nav>

      </header>
      <SubHeader></SubHeader>


    </>
  )
}

export default Header

function ListItems() {
  return (<>
    <ItemComponent imageSrc={checkMark} txt={'30-DAY SATISFACTION GUARANTEE'} />
    <ItemComponent imageSrc={truck} txt={'Free delivery on orders over $40.00'} />
    <ItemComponent imageSrc={heart} txt={'50.000+ HAPPY CUSTOMERS'} />
    <ItemComponent  imageSrc={arrow} txt={'100% Money Back Guarantee'} />
  </>
  )
}



function ItemComponent({ imageSrc, txt }) {
  return (
    <li className='nav-headerItem'>
      <img src={imageSrc} alt={txt}></img>
      <span>{txt}</span>
    </li>
  )
}

function HeaderResponsive({ current, ATag }) {
  return (<ul className="slides">
    <li id="slide-1" className='nav-headerItem'>
      <img src={checkMark} />
      <span>30-DAY SATISFACTION GUARANTEE</span>
    </li>
    <li id="slide-2" className='nav-headerItem' >
      <img src={truck} />
      <span>Free delivery on orders over $40.00</span>
    </li>
    <li id="slide-3" className='nav-headerItem' >
      <img src={heart} />
      <span>50.000+ HAPPY CUSTOMERS</span>
    </li>
    <li id="slide-4" className='nav-headerItem' >
      <img src={arrow} />
      <span>100% Money Back Guarantee</span>
    </li>

    <a href={`#slide-${current}`} style={{ display: 'none' }} ref={ATag}></a>

    </ul>
)
}
