import React, { useState, useEffect } from "react";
import styles from './profile.module.css'
let i = 0;

const ProfilePage = () => {
    let profileName = ['B. TECH IT ENGINEER', 'SOFTWARE DEVELOPER', 'QA', 'REACT DEVELOPER']

    let [currentName, setCurrentName] = useState(profileName[0]);
    const callHimAfterSometime = (t = 200) => {
        setTimeout(() => {
            if (currentName === '') {
                i = (i + 1) % 4
                setCurrentName(profileName[i]);
            } else {
                let newName = currentName.slice(0, -1)
                setCurrentName(newName);
            }
        }, t)

    }
    useEffect(callHimAfterSometime)


    return (
        <div className={styles.maindiv}>
            <img className={styles.devgirl} alt="Avatar placeholder" src="profileicon.png"></img>
             <h1 id="profile-name">Shruti Bhati</h1>
             <div>
             <p className="title">{currentName}</p>

             </div>
        </div>
    )
};
export default ProfilePage;

