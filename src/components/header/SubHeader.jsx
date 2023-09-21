import React from 'react'

import clarifon from '../../assets/subheader/Clarifion_Logo 1.png'
import McAfee from '../../assets/subheader/McAfee_Secure.png'
import norton from '../../assets/subheader/norton-antivirus-logo 1.png'

function SubHeader() {
    return (
        <div className='subHeader'>
            <div className='subHeader-logos'>

                <div className='logos-right'>
                    <img src={clarifon}></img>
                </div>
                <div className='logos-left'>
                    <img src={McAfee}></img>
                    <img src={norton}></img>
                </div>
            </div>
            <div className='subHeader-title'>
                <h1>Wait ! your order in progress.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            </div>
        </div>
    )
}

export default SubHeader