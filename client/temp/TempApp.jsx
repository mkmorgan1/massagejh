import React from 'react';
import styles from './tempStyles.module.scss';

const TempApp = () => {
  return (
    <>
      <div className={styles.circle}>
        <h1 className={styles.title}>Coming Soon!!</h1>
      </div>
      <hr/>
      <div className={styles.contact}>
        <p className={styles.contactTitle}>Contact: </p>
          <a className={styles.email} href="mailto:mkmorgan1994@gmail.com">Email, </a>
          <a className={styles.phone} href="tel:208-709-5531">Phone</a>
      </div>
    </>
  );
}

export default TempApp;