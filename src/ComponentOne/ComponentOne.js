/**
 * ComponentOne is NOT tree-shaked from bundle.js because it is being used
 */
import React from 'react';
import styles from './componentone.css';

function ComponentOne() {
  // something
  return <div className={styles.componentone}> This is the ComponentOne </div>;
}

export default ComponentOne;
