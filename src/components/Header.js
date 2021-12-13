import React, { useState } from "react";
import styles from './heade.module.css';

const Header = (props) => {
    
    const [username, setUsername] = useState("");

    const formHandler = ()=>{
        props.userHandler(username);
    }

    return (
        <div className={styles.bodydiv}>
            <div className={styles.formdiv}>
                <h1 className={styles.heading}>LOG IN</h1>
                <div className={styles.inp}>
                <input
                    type="text"
                    value={username}
                    placeholder="enter a username"
                    onChange={({ target }) => setUsername(target.value)}
                    className={styles.usr}
                />
                </div>
                <div className={styles.inp}>
                    <input
                    className={styles.psw}
                    type="password"
                        placeholder="enter a password"
                    />
                </div>
                <div className={styles.inp}>
                    <button className={styles.btn} onClick={formHandler}>Login</button>
                </div>
            </div>
        </div>
    );
};
export default Header;
