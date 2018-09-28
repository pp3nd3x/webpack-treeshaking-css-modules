/**
 * ComponentThree is tree-shaked from bundle.js because it is being used
 */
import React from 'react';
import styles from './componentthree.css';

function ComponentThree() {
  return (
    <div className={styles.componentthree}> This is the ComponentThree </div>
  );
}

export default ComponentThree;
