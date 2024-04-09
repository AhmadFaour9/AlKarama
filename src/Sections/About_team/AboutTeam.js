import React from 'react'
import './AboutTeam.css'

function AboutTeam(props) {
    return (
         <div className='parent row col-12'>
            <div><p className='head'>{props.header}</p> </div>
            <div className='rw row col-12'>
                <div className='pic row col-6' style={{padding:'40px'}}>
                    <img src={props.image} className='img1' alt='pic for team' />
                    <img src={props.image1} className='img2' alt='' />
</div>
                    
                <div className='text row col-6'>
                    <div className='innerhead'>
                        <p>{props.innerhead} </p>
                    </div>
                    <div className='innertext'>
                        <p style={{fontSize:props.page==='About'?'24.547px':'30px'}}>{props.text}</p>
                    </div>
                    <div className='formore'>
                        <img src={require('../../assets/images/go_down.jpg')} alt='godown' /><p>عرض المزيد</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutTeam