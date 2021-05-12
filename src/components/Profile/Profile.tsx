import React from 'react';
import Button from '@material-ui/core/Button';
import styles from '../Profile/Profile.module.scss';

export function Profile() {
    

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/RaianSores.png" alt="Raian Soares"/>     
        </div>
    );
}

