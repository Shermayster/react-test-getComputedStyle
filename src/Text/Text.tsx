import * as React from 'react';
import styles from './Text.module.css';
export interface TextProps {}

export function Text(props: TextProps) {
	return <span className={styles.text}>Hi!</span>;
}
