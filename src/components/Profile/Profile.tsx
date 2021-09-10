import React, { useState } from 'react';
import styles from '../Profile/Profile.module.scss';
import { Avatar } from '@material-ui/core';

export function Profile() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <div className={styles.profileContainer} >
                <Avatar
                    alt="Raian Soares"
                    src="https://github.com/RaianSores.png"
                
                />          
            </div>
        </>
    );
}

