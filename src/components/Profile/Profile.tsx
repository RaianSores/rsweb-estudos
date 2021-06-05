import React from 'react';
import styles from '../Profile/Profile.module.scss';
import { Avatar } from '@material-ui/core';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <Avatar 
                alt="Raian Soares" 
                src="https://github.com/RaianSores.png"
            />
        </div>
    );
}

