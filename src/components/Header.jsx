import React from'react'
import Navbar from './Navbar';

function Header(){
    return(
        <div id='main'>
            <Navbar />
            <div className='name'>
                <h1><span>Lanuch your App</span>With confidence And Creativity</h1>
                <p className='details'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum dolore possimus
                </p>
                <a href="#" className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header;