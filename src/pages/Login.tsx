import React from 'react';
import CadUser from '../components/CadUser/CadUser';

import styles from '../styles/pages/Home.module.scss';

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <CadUser />
        </div>
      </div>
    </>
  )
}