import React, { useState } from 'react'

const Nav = (props) => {
    const [Display, setDisplay] = useState('none')
    const logoutHandler = () =>{
        (Display === 'none') ? setDisplay('block') : setDisplay('none')
    }
    const logoutHandler2 = () =>{
        props.userHandler2('');
    }
    return (
        <div className='navBar'>
            <ul className='navName'>
                <li onClick={logoutHandler}>{props.navUser}<span id='sym'>&#9660;</span> 
                    <ul className='navDown' style={{display:Display}}>
                        <li><button className='logoutBtn' onClick={logoutHandler2}>LOGOUT</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Nav;