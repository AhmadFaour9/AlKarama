import React from 'react';
import './Championships.css';
function Championships() {
    return (
        <div className='chapionship-card'>
            <div className=' headding-for-champion row col-12'>
                <p> البطولات</p>

            </div>
        <div className='champion-images d-flex justify-content-evenly align-items-end '>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <img src={require('../../assets/images/كأس2.png') }alt='noImage'/>
<p>إسم البطولة(2024)</p>
        </div>
        <div className='d-flex flex-column  justify-content-center align-items-center'>
        <img src={require('../../assets/images/كأس 1.png')}alt='noImage'/>
        <p>إسم البطولة(2024)</p>

        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <img src={require('../../assets/images/كأس3.png')}alt='noImage'/>
        <p>إسم البطولة(2024)</p>

        </div>
        </div>
        </div>
    )
}

export default Championships