import * as React from "react";
import { useHistory } from 'react-router-dom'

import styles from '../CadUser/CadUser.module.scss';

export default function CadUser() {
    const history = useHistory();

    return (
        <>
            <div className={styles.containerUser}>

            </div>
        </>
    );
}