import React from 'react'
import './steps.css'
import checkMark from '../../assets/checkMark-steps.png'
function StepsOptions({setState, stepValue}) {
  return (
    <div>
       <ul className='stepLists'>
        <Step setState={setState} step={"1"} stepValue={stepValue} txt={"Cart Review"}/>
        <Step setState={setState} step={"2"} stepValue={stepValue} txt={"Checkout"}/>
        <Step setState={setState} step={"3"} stepValue={stepValue} txt={"Special Offer"}/>

        <li className='stepOption' onClick={() => {setState("Special Offer"); alert('you need to complete the Special Offer step.')}}>
     <span className='ToBestepSelected'>4</span> 
    <span data-step={`step 4: `}>Confirmation</span>
  </li>
       </ul>
    </div>
  )
}

export default StepsOptions

function Step({setState, step,stepValue, txt}){
  return(<>
  <li onClick={() => setState(txt)} className='stepOption'>
    {stepValue == txt ? <span className='stepSelected'>{step}</span> :  <img src={checkMark} alt={`check mark to ${txt}`}></img>}
    <span data-step={`step ${step}: `}>{txt}</span>
  </li>
  
  </>)
}