/**
 * ComponentTwo is tree-shaked from bundle.js because it is being used
 */
import React from 'react';
import styles from './componenttwo.css';

function ComponentTwo() {
  return <div className={styles.componenttwo}> This is the ComponentTwo </div>;
}

export default ComponentTwo;
