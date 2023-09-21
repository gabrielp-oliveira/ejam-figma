import React, {useEffect, useState} from 'react'
import './mainContent.css'
import CommingSoon from './commingSoon'
import SpecialOffer from './SpecialOffer'
function MainContent({step}) {
    const [content, setContent ] = useState(<SpecialOffer />)
    useEffect(() => {
        if(step !== 'Special Offer'){
            setContent(<CommingSoon />)
        }else{
            setContent(<SpecialOffer />)
        }
    }, [step])
  return (
    <main className='mainContent'>
    {content} 
    </main>
  )
}

export default MainContent